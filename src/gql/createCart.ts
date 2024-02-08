import { graphql } from "../graphql";

export const CREATE_CART_MUTATION = graphql(`
  mutation CreateCart(
    $input: CartCreateInput!
    $fetchBuyerIdentity: Boolean = false
    $fetchShippingMethods: Boolean = false
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = true
  ) {
    createCart(input: $input) {
      ...Cart
    }
  }
`);
