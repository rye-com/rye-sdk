import { graphql } from "../graphql";

export const UPDATE_CART_ITEMS_MUTATION = graphql(`
  mutation UpdateCartItems(
    $input: CartItemsUpdateInput!
    $fetchBuyerIdentity: Boolean = false
    $fetchShippingMethods: Boolean = false
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = true
  ) {
    updateCartItems(input: $input) {
      ...Cart
    }
  }
`);
