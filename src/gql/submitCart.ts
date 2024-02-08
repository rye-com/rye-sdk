import { graphql } from "../graphql";

export const SUBMIT_CART_MUTATION = graphql(`
  mutation SubmitCart($input: CartSubmitInput!) {
    submitCart(input: $input) {
      cart {
        id
        stores {
          status
          requestId
          store {
            ... on AmazonStore {
              store
              cartLines {
                quantity
                product {
                  id
                }
              }
            }
            ... on ShopifyStore {
              store
              cartLines {
                quantity
                variant {
                  id
                }
              }
            }
          }
          errors {
            code
            message
          }
        }
      }
      errors {
        code
        message
      }
    }
  }
`);
