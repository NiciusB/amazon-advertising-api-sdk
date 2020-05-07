import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import {
  AmazonAdvertising,
  SponsoredBrandsKeywordRecommendationParams,
  CreateSponsoredBrandsKeywordParams,
  UpdateSponsoredBrandsKeywordParams,
  CreateSponsoredBrandsNegativeKeywordParams,
  UpdateSponsoredBrandsNegativeKeywordParams,
} from '@scaleleap/amazon-advertising-api-sdk'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const sponsoredBrandsKeywordRecommendationsOperation = amazonAdvertising.sponsoredBrandsKeywordRecommendations
const sponsoredBrandsKeywordsOperation = amazonAdvertising.sponsoredBrandsKeywords
const sponsoredBrandsNegativeKeywordsOperation = amazonAdvertising.sponsoredBrandsNegativeKeywords

// Gets an array of keyword recommendation objects for a set of ASINs included either on a landing page or a Store page.
const sponsoredBrandsKeywordRecommendationParams: SponsoredBrandsKeywordRecommendationParams = {
  asins: ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'],
}
sponsoredBrandsKeywordRecommendationsOperation.getKeywordRecommendations(sponsoredBrandsKeywordRecommendationParams)

// Archives a sponsored brands keyword specified by identifier.
sponsoredBrandsKeywordsOperation.archiveKeyword(123)

// Creates one or more sponsored brands keywords.
const createSBKeywordParams: CreateSponsoredBrandsKeywordParams[] = [
  {
    adGroupId: 123,
    campaignId: 456,
    keywordText: 'Apple',
    matchType: 'broad',
    bid: 1,
  },
]
sponsoredBrandsKeywordsOperation.createKeywords(createSBKeywordParams)

// Gets a sponsored brands keyword specified by identifier.
sponsoredBrandsKeywordsOperation.getKeyword(123)

// Gets an array of sponsored brands keywords, filtered by optional criteria.
sponsoredBrandsKeywordsOperation.listKeywords()

// Updates one or more sponsored brands keywords.
const updateSBKeywordParams: UpdateSponsoredBrandsKeywordParams[] = [
  {
    keywordId: 123,
    adGroupId: 123,
    campaignId: 456,
    state: 'paused',
    bid: 1,
  },
]
sponsoredBrandsKeywordsOperation.updateKeywords(updateSBKeywordParams)

// Archives a sponsored brands negative keyword specified by identifier.
sponsoredBrandsNegativeKeywordsOperation.archiveNegativeKeyword(123)

// Creates one or more sponsored brands negative keywords.
const createNegativeKeywordsParams: CreateSponsoredBrandsNegativeKeywordParams[] = [
  {
    campaignId: 123,
    adGroupId: 123,
    keywordText: 'Apple',
    matchType: 'negativeExact',
  },
]
sponsoredBrandsNegativeKeywordsOperation.createNegativeKeywords(createNegativeKeywordsParams)

// Gets a sponsored brands negative keyword specified by identifier.
sponsoredBrandsNegativeKeywordsOperation.getNegativeKeyword(123)

// Updates one or more sponsored brands negative keywords.
const updateNegativeKeywordsParams: UpdateSponsoredBrandsNegativeKeywordParams[] = [
  {
    campaignId: 123,
    adGroupId: 123,
    keywordId: 123,
    state: 'archived',
  },
]
sponsoredBrandsNegativeKeywordsOperation.updateNegativeKeywords(updateNegativeKeywordsParams)