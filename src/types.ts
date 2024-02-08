import {
  CartBuyerIdentityUpdateInput,
  CartCreateInput,
  CartDeleteInput,
  CartItemsAddInput,
  CartItemsDeleteInput,
  CartItemsUpdateInput,
  CartSubmitInput,
  RequestProductByUrlInput,
  RequestStoreByUrlInput,
  UpdateCartSelectedShippingOptionsInput,
} from "./graphql/graphql";

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

export type AddCartItemsParams = {
  input: CartItemsAddInput;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};

export type DeleteCartItemsParams = {
  input: CartItemsDeleteInput;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};

export type UpdateCartItemsParams = {
  input: CartItemsUpdateInput;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};

export type RemoveCartParams = {
  input: CartDeleteInput;
};

export type UpdateCartBuyerIdentityParams = {
  input: CartBuyerIdentityUpdateInput;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};

export type UpdateCartSelectedShippingOptionsParams = {
  input: UpdateCartSelectedShippingOptionsInput;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};

export type SubmitCartParams = {
  input: CartSubmitInput;
};

export type OrderByIdParams = {
  id: string;
};

export type CheckoutByCartIdParams = {
  cartID: string;
  fetchBuyerIdentity?: boolean;
  fetchShippingMethods?: boolean;
  fetchOffer?: boolean;
  fetchCartLines?: boolean;
};

export type ShopifyAppParams = {
  storeCanonicalDomain: string;
};

export type RequestProductByUrlParams = {
  input: RequestProductByUrlInput;
};

export type RequestStoreByUrlParams = {
  input: RequestStoreByUrlInput;
};
