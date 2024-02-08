import { graphql } from "../graphql";

export const UPDATE_CART_SELECTED_SHIPPING_OPTIONS_MUTATION = graphql(`
  mutation UpdateCartSelectedShippingOptions(
    $input: UpdateCartSelectedShippingOptionsInput!
    $fetchBuyerIdentity: Boolean = false
    $fetchShippingMethods: Boolean = true
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = false
  ) {
    updateCartSelectedShippingOptions(input: $input) {
      ...Cart
    }
  }
`);
