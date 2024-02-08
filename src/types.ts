export type GetCartParams = {
  id: string;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};
