import { graphql } from "../graphql";

export const UPDATE_CART_BUYER_IDENTITY_MUTATION = graphql(`
  mutation UpdateCartBuyerIdentity(
    $input: CartBuyerIdentityUpdateInput!
    $fetchBuyerIdentity: Boolean = false
    $fetchShippingMethods: Boolean = true
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = false
  ) {
    updateCartBuyerIdentity(input: $input) {
      ...Cart
    }
  }
`);
