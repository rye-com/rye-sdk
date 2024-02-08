import { graphql } from "../graphql";

export const ORDER_BY_ID_QUERY = graphql(`
  query OrderById($id: ID!) {
    orderByID(id: $id) {
      id
      status
      shipments {
        carrierName
        carrierTrackingNumber
        carrierTrackingUrl
      }
      marketplaceOrderIds
      marketplace
      events {
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
  }
`);
