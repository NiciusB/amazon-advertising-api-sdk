export type CreateAsyncReportRequest<TypeId extends AsyncReportTypeId> = {
  endDate: string
  configuration: AsyncReportConfiguration<TypeId>
  name?: string
  startDate: string
}

export type AsyncReportConfiguration<TypeId extends AsyncReportTypeId> = {
  adProduct: AsyncReportAdProduct
  columns: string[]
  reportTypeId: TypeId
  format: 'GZIP_JSON'
  groupBy: string[]
  filters?: AsyncReportFilter[] | null
  timeUnit: 'SUMMARY' | 'DAILY'
}

export type AsyncReportFilter = {
  field?: string
  values?: string[]
}

export type AsyncReportTypeId =
  | 'spTargeting'
  | 'spSearchTerm'
  | 'spCampaigns'
  | 'spAdvertisedProduct'
  | 'spPurchasedProduct'
  | 'sbPurchasedProduct'

/**
 * The advertising product such as SPONSORED_PRODUCTS or SPONSORED_BRANDS.
 */
export type AsyncReportAdProduct = 'SPONSORED_PRODUCTS' | 'SPONSORED_BRANDS'
