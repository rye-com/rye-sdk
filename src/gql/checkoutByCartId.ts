import { graphql } from '../graphql';

export const CHECKOUT_BY_CART_ID_QUERY = graphql(`
  query CheckoutByCartID($cartID: ID!) {
    checkoutByCartID(cartID: $cartID) {
      status
      orders {
        id
        status
        events {
          __typename
          id
          createdAt
          ... on OrderFailedOrderEvent {
            reason
          }
        }
        requiredActions {
          ... on CompletePaymentChallenge {
            redirectURL
          }
        }
      }
      cart {
        id
        ...BuyerIdentity
        stores {
          ... on AmazonStore {
            isSubmitted
            requestId
            errors {
              code
              message
              details {
                productIds
              }
            }
            store
            ...AmazonCartLines
            isShippingRequired
            ...AmazonOffer
            offer {
              ...AmazonShippingMethods
            }
          }
          ... on ShopifyStore {
            errors {
              code
              message
              details {
                variantIds
              }
            }
            store
            ...ShopifyCartLines
            ...ShopifyOffer
            offer {
              ...ShopifyShippingMethods
            }
          }
        }
      }
    }
  }
`);
