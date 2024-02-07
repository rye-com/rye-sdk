import {
  AnyVariables,
  cacheExchange,
  Client,
  DocumentInput,
  fetchExchange,
  OperationResult,
  OperationResultSource,
} from 'urql'

import { ENVIRONMENT, GRAPHQL_ENDPOINTS, RYE_SHOPPER_IP } from './constants'
import { GET_CART_QUERY } from './gql/getCart'
import { GetCartQuery } from './graphql/graphql'
import { GetCartParams, Operation } from './types'

interface IRyeClient {
  getCart(
    getCartParams: GetCartParams
  ): Promise<GetCartQuery['getCart'] | undefined>
}

class RyeClient implements IRyeClient {
  private authHeader: string | null
  private shopperIp: string | null
  private environment: ENVIRONMENT
  private ryeClient: Client

  constructor(
    authHeader: string,
    shopperIp: string,
    environment?: ENVIRONMENT
  ) {
    this.authHeader = authHeader
    this.shopperIp = shopperIp
    this.environment = environment || ENVIRONMENT.PRODUCTION
    this.ryeClient = this.initializeClient()
  }

  /**
   * Fetches cart details.
   * @param getCartParams - The params for the getCart query.
   * @returns A promise that resolves to the cart data or undefined.
   */
  getCart = async (
    getCartParams: GetCartParams
  ): Promise<GetCartQuery['getCart'] | undefined> => {
    const response = await this.apiRequest(GET_CART_QUERY, getCartParams);
    return response?.data?.getCart
  }

  /**
   * The function initializes a client with the specified authentication header and shopper IP.
   * @returns The function `initializeClient` returns a new instance of the `Client` class.
   */
  private initializeClient() {
    if (!this.authHeader || !this.shopperIp) {
      throw new Error(
        'RyeClient requires an authHeader and shopperIp to be set.'
      )
    }
    return new Client({
      url: GRAPHQL_ENDPOINTS[this.environment],
      exchanges: [cacheExchange, fetchExchange],
      fetchOptions: () => {
        return {
          headers: {
            Authorization: this.authHeader!,
            [RYE_SHOPPER_IP]: this.shopperIp!,
          },
        }
      },
    })
  }

  /**
   * Make an API request to retrieve the cart data.
   * @param query
   * @param variables - The variables to include in the API request.
   * @param method - either query or mutation.
   * @returns The response data from the API.
   */
  private async apiRequest<TResult, TVariables extends AnyVariables>(
    query: DocumentInput<TResult, TVariables>,
    variables: TVariables,
    method: Operation = Operation.Query
  ): Promise<OperationResultSource<OperationResult<TResult, TVariables>>> {
    const tryRequest = async () => {
      return await this.ryeClient[method](query, variables)
    }

    try {
      return await tryRequest()
    } catch (e) {
      console.error('Error requesting Rye API.', e)
      throw e
    }
  }
}

export { RyeClient }
