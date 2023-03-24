import { Operation } from '../operation'
import axiosDownload from '../../axios-download'
import assert from 'node:assert'
import { AsyncReport } from './report-response'
import { AsyncReportTypeId, CreateAsyncReportRequest } from './base-report-params'

export class BaseV3ReportOperation<
  TypeId extends AsyncReportTypeId = AsyncReportTypeId,
> extends Operation {
  async getReport(reportId: string): Promise<AsyncReport<TypeId>> {
    return await this.client.get(`reporting/reports/${reportId}`)
  }

  async deleteReport(reportId: string): Promise<DeleteAsyncReportResponse> {
    return await this.client.delete(`reporting/reports/${reportId}`)
  }

  async createReport(body: CreateAsyncReportRequest<TypeId>): Promise<AsyncReport<TypeId>> {
    return await this.client.post(`reporting/reports`, body)
  }

  async downloadReport<T extends string>(
    report: AsyncReport<TypeId>,
  ): Promise<Partial<Record<T, 'number' | 'string'>>[]> {
    assert(
      report.url,
      'Report has no download url. The report is probably still being generated, or maybe it has failed',
    )

    return await axiosDownload(report.url)
  }
}

export type DeleteAsyncReportResponse = {
  code?: string
  reportId?: string
  // Defined by the OpenAPI schema. However, as of 24/Mar/2023 detail is returned instead
  details?: string
  // Not defined in the OpenAPI schema, but actually returned in the responses. See issue: https://github.com/amzn/ads-advanced-tools-docs/issues/59
  detail?: string
}
