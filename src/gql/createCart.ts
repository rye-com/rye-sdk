import { graphql } from '../graphql';

export const CREATE_CART_MUTATION = graphql(`
  mutation CreateCart($input: CartCreateInput!) {
    createCart(input: $input) {
      ...Cart
    }
  }
`);
