import {
  AnyVariables,
  cacheExchange,
  Client,
  DocumentInput,
  fetchExchange,
  OperationResult,
  OperationResultSource,
} from "urql";

import {
  ENVIRONMENT,
  GRAPHQL_ENDPOINTS,
  OPERATION,
  RYE_SHOPPER_IP,
} from "./constants";
import { ADD_CART_ITEMS_MUTATION } from "./gql/addCartItems";
import { CHECKOUT_BY_CART_ID_QUERY } from "./gql/checkoutByCartId";
import { CREATE_CART_MUTATION } from "./gql/createCart";
import { DELETE_CART_ITEMS_MUTATION } from "./gql/deleteCartItems";
import { ENVIRONMENT_TOKEN_QUERY } from "./gql/environmentToken";
import { GET_CART_QUERY } from "./gql/getCart";
import { ORDER_BY_ID_QUERY } from "./gql/orderById";
import { PRODUCT_BY_ID_QUERY } from "./gql/productById";
import { PRODUCTS_BY_DOMAIN_V2_QUERY } from "./gql/productsByDomainV2";
import { REMOVE_CART_MUTATION } from "./gql/removeCart";
import { REQUEST_PRODUCT_BY_URL_MUTATION } from "./gql/requestProductByURL";
import { REQUEST_STORE_BY_URL_MUTATION } from "./gql/requestStoreByURL";
import { SHOPIFY_APP_QUERY } from "./gql/shopifyApp";
import { SUBMIT_CART_MUTATION } from "./gql/submitCart";
import { UPDATE_CART_BUYER_IDENTITY_MUTATION } from "./gql/updateCartBuyerIdentity";
import { UPDATE_CART_ITEMS_MUTATION } from "./gql/updateCartItems";
import { UPDATE_CART_SELECTED_SHIPPING_OPTIONS_MUTATION } from "./gql/updateCartSelectedShippingOptions";
import {
  AddCartItemsMutation,
  CheckoutByCartIdQuery,
  CreateCartMutation,
  DeleteCartItemsMutation,
  EnvironmentTokenQuery,
  GetCartQuery,
  OrderByIdQuery,
  ProductByIdQuery,
  ProductsByDomainV2Query,
  RemoveCartMutation,
  RequestProductByUrlMutation,
  RequestStoreByUrlMutation,
  ShopifyAppQuery,
  SubmitCartMutation,
  UpdateCartBuyerIdentityMutation,
  UpdateCartItemsMutation,
  UpdateCartSelectedShippingOptionsMutation,
} from "./graphql/graphql";
import {
  AddCartItemsParams,
  CheckoutByCartIdParams,
  CreateCartParams,
  DeleteCartItemsParams,
  GetCartParams,
  OrderByIdParams,
  ProductByIdParams,
  ProductsByDomainV2Params,
  RemoveCartParams,
  RequestProductByUrlParams,
  RequestStoreByUrlParams,
  ShopifyAppParams,
  SubmitCartParams,
  UpdateCartBuyerIdentityParams,
  UpdateCartItemsParams,
  UpdateCartSelectedShippingOptionsParams,
} from "./types";

interface IRyeClient {
  getCart(
    getCartParams: GetCartParams,
  ): Promise<GetCartQuery["getCart"] | undefined>;

  createCart(
    createCartParams: CreateCartParams,
  ): Promise<CreateCartMutation["createCart"] | undefined>;

  addCartItems(
    addCartItemsParams: AddCartItemsParams,
  ): Promise<AddCartItemsMutation["addCartItems"] | undefined>;

  deleteCartItems(
    deleteCartItemsParams: DeleteCartItemsParams,
  ): Promise<DeleteCartItemsMutation["deleteCartItems"] | undefined>;

  updateCartItems(
    updateCartItemsParams: UpdateCartItemsParams,
  ): Promise<UpdateCartItemsMutation["updateCartItems"] | undefined>;

  removeCart(
    removeCartItemsParams: RemoveCartParams,
  ): Promise<RemoveCartMutation["removeCart"] | undefined>;
}

class RyeClient implements IRyeClient {
  private authHeader: string | null;
  private shopperIp: string | null;
  private environment: ENVIRONMENT;
  private ryeClient: Client;

  constructor(
    authHeader: string,
    shopperIp: string,
    environment = ENVIRONMENT.PRODUCTION,
  ) {
    this.authHeader = authHeader;
    this.shopperIp = shopperIp;
    this.environment = environment;
    this.ryeClient = this.initializeClient();
  }

  /**
   * The function initializes a client with the specified authentication header and shopper IP.
   * @returns The function `initializeClient` returns a new instance of the `Client` class.
   */
  private initializeClient() {
    if (!this.authHeader || !this.shopperIp) {
      throw new Error(
        "RyeClient requires an authHeader and shopperIp to be set.",
      );
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
        };
      },
    });
  }

  /**
   * Make an API request.
   * @param query
   * @param variables - The variables to include in the API request.
   * @param method - either query or mutation.
   * @returns The response data from the API.
   */
  private async apiRequest<TResult, TVariables extends AnyVariables>(
    query: DocumentInput<TResult, TVariables>,
    variables: TVariables,
    method: OPERATION = OPERATION.QUERY,
  ): Promise<OperationResultSource<OperationResult<TResult, TVariables>>> {
    const tryRequest = async () => {
      return await this.ryeClient[method](query, variables);
    };

    try {
      return await tryRequest();
    } catch (e) {
      console.error("Error requesting Rye API. ", {
        query,
        variables,
        method,
        error: e,
      });
      throw e;
    }
  }

  /**
   * Fetches cart details.
   * @param getCartParams - The params for the getCart query.
   * @returns A promise that resolves to the cart data or undefined.
   */
  getCart = async (
    getCartParams: GetCartParams,
  ): Promise<GetCartQuery["getCart"] | undefined> => {
    const response = await this.apiRequest(GET_CART_QUERY, getCartParams);
    return response?.data?.getCart;
  };

  /**
   * Creates a cart.
   * @param createCartParams - The params for the createCart mutation.
   * @returns A promise that resolves to the cart data or undefined.
   */
  createCart = async (
    createCartParams: CreateCartParams,
  ): Promise<CreateCartMutation["createCart"] | undefined> => {
    const response = await this.apiRequest(
      CREATE_CART_MUTATION,
      createCartParams,
      OPERATION.MUTATION,
    );
    return response.data?.createCart;
  };

  /**
   * Add items to your cart.
   * @param addCartItemsParams - The params for the addCartItems mutation.
   * @returns A promise that resolves to the cart data or undefined.
   */
  addCartItems = async (
    addCartItemsParams: AddCartItemsParams,
  ): Promise<AddCartItemsMutation["addCartItems"] | undefined> => {
    const response = await this.apiRequest(
      ADD_CART_ITEMS_MUTATION,
      addCartItemsParams,
      OPERATION.MUTATION,
    );
    return response.data?.addCartItems;
  };

  /**
   * Delete items from your cart.
   * @param deleteCartItemsParams - The params for the deleteCartItems mutation.
   * @returns A promise that resolves to the cart data or undefined.
   */
  deleteCartItems = async (
    deleteCartItemsParams: DeleteCartItemsParams,
  ): Promise<DeleteCartItemsMutation["deleteCartItems"] | undefined> => {
    const response = await this.apiRequest(
      DELETE_CART_ITEMS_MUTATION,
      deleteCartItemsParams,
      OPERATION.MUTATION,
    );
    return response.data?.deleteCartItems;
  };

  /**
   * Update item quantities for your cart.
   * @param updateCartItemsParams - The params for the updateCartItems mutation.
   * @returns A promise that resolves to the cart data or undefined.
   */
  updateCartItems = async (
    updateCartItemsParams: UpdateCartItemsParams,
  ): Promise<UpdateCartItemsMutation["updateCartItems"] | undefined> => {
    const response = await this.apiRequest(
      UPDATE_CART_ITEMS_MUTATION,
      updateCartItemsParams,
      OPERATION.MUTATION,
    );
    return response.data?.updateCartItems;
  };

  /**
   * Removes/Deletes the cart.
   * @param removeCartItemsParams - The params for the removeCart mutation.
   * @returns A promise that resolves to the cart ID or undefined.
   */
  removeCart = async (
    removeCartItemsParams: RemoveCartParams,
  ): Promise<RemoveCartMutation["removeCart"] | undefined> => {
    const response = await this.apiRequest(
      REMOVE_CART_MUTATION,
      removeCartItemsParams,
      OPERATION.MUTATION,
    );
    return response.data?.removeCart;
  };

  /**
   * Update buyer identity for the cart.
   * @param updateCartBuyerIdentityParams - The params for the updateCartBuyerIdentity mutation.
   * @returns A promise that resolves to the cart data or undefined.
   */
  updateCartBuyerIdentity = async (
    updateCartBuyerIdentityParams: UpdateCartBuyerIdentityParams,
  ): Promise<
    UpdateCartBuyerIdentityMutation["updateCartBuyerIdentity"] | undefined
  > => {
    const response = await this.apiRequest(
      UPDATE_CART_BUYER_IDENTITY_MUTATION,
      updateCartBuyerIdentityParams,
      OPERATION.MUTATION,
    );
    return response.data?.updateCartBuyerIdentity;
  };

  /**
   * Update shipping options for a cart.
   * @param  updateCartSelectedShippingOptionsParams - The params for the updateCartSelectedShippingOptions mutation.
   * @returns A promise that resolves to the cart data or undefined.
   */
  updateCartSelectedShippingOptions = async (
    updateCartSelectedShippingOptionsParams: UpdateCartSelectedShippingOptionsParams,
  ): Promise<
    | UpdateCartSelectedShippingOptionsMutation["updateCartSelectedShippingOptions"]
    | undefined
  > => {
    const response = await this.apiRequest(
      UPDATE_CART_SELECTED_SHIPPING_OPTIONS_MUTATION,
      updateCartSelectedShippingOptionsParams,
      OPERATION.MUTATION,
    );
    return response.data?.updateCartSelectedShippingOptions;
  };

  /**
   * Submit cart for checkout.
   * @param submitCartParams - The params for the submitCart mutation.
   * @returns A promise that resolves to the cart data or undefined.
   */
  submitCart = async (
    submitCartParams: SubmitCartParams,
  ): Promise<SubmitCartMutation["submitCart"] | undefined> => {
    const response = await this.apiRequest(
      SUBMIT_CART_MUTATION,
      submitCartParams,
      OPERATION.MUTATION,
    );
    return response.data?.submitCart;
  };

  /**
   * Get order by ID.
   * @param orderByIdParams - The params for the orderById query.
   * @returns A promise that resolves to the order data or undefined.
   */
  orderById = async (
    orderByIdParams: OrderByIdParams,
  ): Promise<OrderByIdQuery["orderByID"] | undefined> => {
    const response = await this.apiRequest(ORDER_BY_ID_QUERY, orderByIdParams);
    return response?.data?.orderByID;
  };

  /**
   * Get checkout details of cart by ID.
   * @param checkoutByCartIdParams - The params for the checkoutByCartId query.
   * @returns A promise that resolves to the checked out cart data or undefined.
   */
  checkoutByCartId = async (
    checkoutByCartIdParams: CheckoutByCartIdParams,
  ): Promise<CheckoutByCartIdQuery["checkoutByCartID"] | undefined> => {
    const response = await this.apiRequest(
      CHECKOUT_BY_CART_ID_QUERY,
      checkoutByCartIdParams,
    );
    return response?.data?.checkoutByCartID;
  };

  /**
   * Get Rye Pay env token.
   * @returns A promise that resolves to the env token or undefined.
   */
  getEnvironmentToken = async (): Promise<
    EnvironmentTokenQuery["environmentToken"] | undefined
  > => {
    const response = await this.apiRequest(ENVIRONMENT_TOKEN_QUERY, {});

    return response.data?.environmentToken;
  };

  /**
   * Get ShopifyApp information.
   * @param shopifyAppParams - The params for the shopifyApp query.
   * @returns A promise that resolves to the Shopify app details or undefined.
   */
  getShopifyAppInformation = async (
    shopifyAppParams: ShopifyAppParams,
  ): Promise<ShopifyAppQuery["shopifyApp"] | undefined> => {
    const response = await this.apiRequest(SHOPIFY_APP_QUERY, shopifyAppParams);

    return response.data?.shopifyApp;
  };

  /**
   * Request product by URL to be tracked by Rye.
   * @param requestProductByUrlParams - The params for the requestProductByUrl query.
   * @returns A promise that resolves to the product ID or undefined.
   */
  requestProductByUrl = async (
    requestProductByUrlParams: RequestProductByUrlParams,
  ): Promise<
    RequestProductByUrlMutation["requestProductByURL"] | undefined
  > => {
    const response = await this.apiRequest(
      REQUEST_PRODUCT_BY_URL_MUTATION,
      requestProductByUrlParams,
      OPERATION.MUTATION,
    );

    return response.data?.requestProductByURL;
  };

  /**
   * Request a store by URL to be tracked by Rye.
   * @param requestStoreByUrlParams - The params for the requestStoreByUrl query.
   * @returns A promise that resolves to the request ID or undefined.
   */
  requestStoreByUrl = async (
    requestStoreByUrlParams: RequestStoreByUrlParams,
  ): Promise<RequestStoreByUrlMutation["requestStoreByURL"] | undefined> => {
    const response = await this.apiRequest(
      REQUEST_STORE_BY_URL_MUTATION,
      requestStoreByUrlParams,
      OPERATION.MUTATION,
    );

    return response.data?.requestStoreByURL;
  };

  /**
   * Fetch product information via Product ID.
   * @param productByIdParams - The params for the productById query.
   * @returns A promise that resolves to the product data or undefined.
   */
  getProductById = async (
    productByIdParams: ProductByIdParams,
  ): Promise<ProductByIdQuery["productByID"] | undefined> => {
    const response = await this.apiRequest(
      PRODUCT_BY_ID_QUERY,
      productByIdParams,
    );

    return response.data?.productByID;
  };

  /**
   * Fetch all products information via domain.
   * @param productsByDomainV2Params - The params for the productsByDomainV2 query.
   * @returns A promise that resolves to the array of products or undefined.
   */
  getProductsByDomainV2 = async (
    productsByDomainV2Params: ProductsByDomainV2Params,
  ): Promise<ProductsByDomainV2Query["productsByDomainV2"] | undefined> => {
    const response = await this.apiRequest(
      PRODUCTS_BY_DOMAIN_V2_QUERY,
      productsByDomainV2Params,
    );

    return response.data?.productsByDomainV2;
  };
}

export { RyeClient };
