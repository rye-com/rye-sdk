import { graphql } from "../graphql";

export const GET_CART_QUERY = graphql(`
  query GetCart(
    $id: ID!
    $fetchBuyerIdentity: Boolean = true
    $fetchShippingMethods: Boolean = true
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = true
  ) {
    getCart(id: $id) {
      ...Cart
    }
  }
`);
