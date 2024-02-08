import { graphql } from "../graphql";

export const REMOVE_CART_MUTATION = graphql(`
  mutation RemoveCart($input: CartDeleteInput!) {
    removeCart(input: $input) {
      deletedId
    }
  }
`);
