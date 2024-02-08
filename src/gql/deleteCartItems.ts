import { graphql } from "../graphql";

export const DELETE_CART_ITEMS_MUTATION = graphql(`
  mutation DeleteCartItems(
    $input: CartItemsDeleteInput!
    $fetchBuyerIdentity: Boolean = false
    $fetchShippingMethods: Boolean = false
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = true
  ) {
    deleteCartItems(input: $input) {
      ...Cart
    }
  }
`);
