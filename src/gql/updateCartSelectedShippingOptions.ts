import { graphql } from '../graphql';

export const UPDATE_CART_SELECTED_SHIPPING_OPTIONS_MUTATION = graphql(`
  mutation UpdateCartSelectedShippingOptions($input: UpdateCartSelectedShippingOptionsInput!) {
    updateCartSelectedShippingOptions(input: $input) {
      ...Cart
    }
  }
`);
