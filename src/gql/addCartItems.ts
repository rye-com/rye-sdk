import { graphql } from '../graphql';

export const ADD_CART_ITEMS_MUTATION = graphql(`
  mutation AddCartItems($input: CartItemsAddInput!) {
    addCartItems(input: $input) {
      ...Cart
    }
  }
`);
