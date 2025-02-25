// file: src/tests/unit/http-client/UrlUtils.getFullUrlWithParams.test.ts

import { UrlUtils } from '../../../http-client'

describe('UrlUtils: getFullUrlWithParams', () => {
  it('should return fullUrl formatted as expected with one param', () => {
    const baseUrl = 'https://unit-test-api/v1/people/[organizationId]/demographics'
    const params = {
      organizationId: 5346782
    }
    const result = UrlUtils.getFullUrlWithParams(baseUrl, params)

    expect('https://unit-test-api/v1/people/5346782/demographics').toEqual(result)
  })

  // test our component click event
  it('should return fullUrl formatted as expected with multiple params', () => {
    const baseUrl = 'https://unit-test-api/v1/people/[organizationId]/[country]/[state]/[cityId]'
    const params = {
      organizationId: 5346782,
      country: 'USA',
      state: 'CA',
      cityId: 'abcdef12345'
    }
    const result = UrlUtils.getFullUrlWithParams(baseUrl, params)

    expect('https://unit-test-api/v1/people/5346782/USA/CA/abcdef12345').toEqual(result)
  })
})
