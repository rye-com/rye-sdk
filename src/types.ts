import {
  CartBuyerIdentityUpdateInput,
  CartCreateInput,
  CartDeleteInput,
  CartItemsAddInput,
  CartItemsDeleteInput,
  CartItemsUpdateInput,
  CartSubmitInput,
  OffsetPaginationInput,
  ProductByIdInput,
  ProductsByDomainInput,
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

export type ProductByIdParams = {
  input: ProductByIdInput;
  includeAdditionalProductDetails: boolean;
};

export type ProductsByDomainV2Params = {
  input: ProductsByDomainInput;
  pagination: OffsetPaginationInput;
  includeAdditionalProductDetails: boolean;
};

export type IntegratedShopifyStoreParams = {
  canonicalDomain: string;
  productsIDs: string[];
  collectionsLast?: number;
  collectionsFirst?: number;
  collectionsAfter?: string;
  collectionsBefore?: string;
  productsFirst?: number;
  productsLast?: number;
  productsAfter?: string;
  productsBefore?: string;
};

export type ShopifyCollectionParams = {
  collectionId: string;
  productsFirst?: number;
  productsLast?: number;
  productsAfter?: string;
  productsBefore?: string;
};
