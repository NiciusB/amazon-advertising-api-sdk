import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { AdGroupReportMetricsEnum } from '../metrics/ad-group-report-metrics-enum'

export interface SponsoredProductsAdGroupReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, AdGroupReportMetricsEnum> {
  recordType: SponsoredProductsReportTypeEnum.AD_GROUPS
}