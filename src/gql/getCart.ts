import { graphql } from '../graphql';

export const GET_CART_QUERY = graphql(`
  query GetCart($id: ID!) {
    getCart(id: $id) {
      ...Cart
    }
  }
`);
