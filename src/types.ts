export enum Operation {
  Query = 'query',
  Mutation = 'mutation',
}

export type GetCartParams = {
  id: string
  fetchBuyerIdentity?: boolean
  fetchShippingMethods?: boolean
  fetchOffer?: boolean
  fetchCartLines?: boolean
}
