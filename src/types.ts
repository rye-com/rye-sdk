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
} from './graphql/graphql';

export type GetCartParams = {
  id: string;
};

export type CreateCartParams = {
  input: CartCreateInput;
};

export type AddCartItemsParams = {
  input: CartItemsAddInput;
};

export type DeleteCartItemsParams = {
  input: CartItemsDeleteInput;
};

export type UpdateCartItemsParams = {
  input: CartItemsUpdateInput;
};

export type RemoveCartParams = {
  input: CartDeleteInput;
};

export type UpdateCartBuyerIdentityParams = {
  input: CartBuyerIdentityUpdateInput;
};

export type UpdateCartSelectedShippingOptionsParams = {
  input: UpdateCartSelectedShippingOptionsInput;
};

export type SubmitCartParams = {
  input: CartSubmitInput;
};

export type OrderByIdParams = {
  id: string;
};

export type CheckoutByCartIdParams = {
  cartID: string;
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
};

export type ProductsByDomainV2Params = {
  input: ProductsByDomainInput;
  pagination: OffsetPaginationInput;
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
