import { AsyncReportConfiguration, AsyncReportTypeId } from './base-report-params'

export type AsyncReport<TypeId extends AsyncReportTypeId = AsyncReportTypeId> = {
  reportId: string
  endDate: string
  configuration: AsyncReportConfiguration<TypeId>
  urlExpiresAt?: string | null
  url?: string | null
  createdAt: string
  fileSize?: number | null
  failureReason?: string | null
  name?: string | null
  generatedAt?: string | null
  startDate: string
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
  updatedAt: string
}
