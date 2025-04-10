import { graphql } from '../graphql';

export const DELETE_CART_ITEMS_MUTATION = graphql(`
  mutation DeleteCartItems($input: CartItemsDeleteInput!) {
    deleteCartItems(input: $input) {
      ...Cart
    }
  }
`);
