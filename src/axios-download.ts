import { InvalidProgramStateError } from './errors'
import { axios } from './axios'
import { JSON_CONTENT_TYPE } from './constants'
import gunzip from './gunzip'
import HttpStatus from 'http-status-codes'

export default async function axiosDownload<T>(location: string): Promise<T> {
  const download = await axios.get<ArrayBuffer>(location, {
    responseType: 'arraybuffer',
  })

  if (download.status !== HttpStatus.OK) {
    throw new InvalidProgramStateError(`Expected OK HTTP status, but got: ${download.statusText}`)
  }

  const buffer = Buffer.from(download.data)
  const contentType: string = download.headers['content-type']

  const bufferToJson = (buf: Buffer): T => {
    return JSON.parse(buf.toString())
  }

  switch (contentType) {
    case JSON_CONTENT_TYPE:
      return bufferToJson(buffer)
    case 'application/x-gzip':
    case 'application/octet-stream':
    case 'binary/octet-stream':
      return gunzip(buffer)
        .then(bufferToJson)
        .catch(() => {
          const bufferHex = Buffer.from(buffer.toString(), 'hex')
          return gunzip(bufferHex).then(bufferToJson)
        })
    default:
      throw new InvalidProgramStateError(`Unknown Content-Type: ${contentType}`)
  }
}
