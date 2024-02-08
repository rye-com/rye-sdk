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
import { CREATE_CART_MUTATION } from "./gql/createCart";
import { DELETE_CART_ITEMS_MUTATION } from "./gql/deleteCartItems";
import { GET_CART_QUERY } from "./gql/getCart";
import { REMOVE_CART_MUTATION } from "./gql/removeCart";
import { SUBMIT_CART_MUTATION } from "./gql/submitCart";
import { UPDATE_CART_BUYER_IDENTITY_MUTATION } from "./gql/updateCartBuyerIdentity";
import { UPDATE_CART_ITEMS_MUTATION } from "./gql/updateCartItems";
import { UPDATE_CART_SELECTED_SHIPPING_OPTIONS_MUTATION } from "./gql/updateCartSelectedShippingOptions";
import {
  AddCartItemsMutation,
  CreateCartMutation,
  DeleteCartItemsMutation,
  GetCartQuery,
  RemoveCartMutation,
  SubmitCartMutation,
  UpdateCartBuyerIdentityMutation,
  UpdateCartItemsMutation,
  UpdateCartSelectedShippingOptionsMutation,
} from "./graphql/graphql";
import {
  AddCartItemsParams,
  CreateCartParams,
  DeleteCartItemsParams,
  GetCartParams,
  RemoveCartParams,
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
}

export { RyeClient };
