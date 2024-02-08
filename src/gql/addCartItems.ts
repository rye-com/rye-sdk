import { graphql } from "../graphql";

export const ADD_CART_ITEMS_MUTATION = graphql(`
  mutation AddCartItems(
    $input: CartItemsAddInput!
    $fetchBuyerIdentity: Boolean = false
    $fetchShippingMethods: Boolean = false
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = true
  ) {
    addCartItems(input: $input) {
      ...Cart
    }
  }
`);
