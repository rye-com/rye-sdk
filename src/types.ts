import { CartCreateInput } from "./graphql/graphql";

export type GetCartParams = {
  id: string;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};

export type CreateCartParams = {
  input: CartCreateInput;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};
