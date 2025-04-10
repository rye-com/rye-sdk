import { graphql } from '../graphql';

export const UPDATE_CART_ITEMS_MUTATION = graphql(`
  mutation UpdateCartItems($input: CartItemsUpdateInput!) {
    updateCartItems(input: $input) {
      ...Cart
    }
  }
`);
