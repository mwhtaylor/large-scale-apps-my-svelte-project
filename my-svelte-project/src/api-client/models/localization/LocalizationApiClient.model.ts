// file: src/api-client/models/localization/LocalizationApiClient.model.ts

import { httpClient, HttpRequestParamsInterface, HttpRequestType } from '@/http-client'

import { LocalizationApiClientUrlsInterface } from './LocalizationApiClientUrls.interface'
import { LocalizationApiClientInterface } from './LocalizationApiClient.interface'

/**
 * @Name LocalizationApiClientModel
 * @description
 * Implements the LocalizationApiClientInterface interface
 */
export class LocalizationApiClientModel implements LocalizationApiClientInterface {
  private readonly urls!: LocalizationApiClientUrlsInterface
  private readonly mockDelay: number = 0

  constructor(options: { urls: LocalizationApiClientUrlsInterface; mockDelay?: number }) {
    this.urls = options.urls
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay
    }
  }

  fetchTranslation(namespace: string, key: string): Promise<{ [key: string]: string }> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      url: this.urls.fetchTranslation,
      requiresToken: false,
      payload: {
        namespace,
        key
      } as any
    }

    //return httpClient.request<{ [key: string]: string }>(requestParameters)

    // if you want to keep simulating the artificail delay, use this
    if (!this.mockDelay) {
      return httpClient.request<{ [key: string]: string }>(requestParameters)
    } else {
      return new Promise<{ [key: string]: string }>((resolve) => {
        httpClient.request<{ [key: string]: string }>(requestParameters).then((data) => {
          setTimeout(() => {
            resolve(data)
          }, this.mockDelay)
        })
      })
    }
  }
}
