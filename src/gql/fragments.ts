import { graphql } from "../graphql";

export const BuyerIdentity = graphql(`
  fragment BuyerIdentity on Cart {
    buyerIdentity {
      firstName
      lastName
      address1
      address2
      city
      provinceCode
      countryCode
      postalCode
      email
      phone
    }
  }
`);

export const AmazonShippingMethods = graphql(`
  fragment AmazonShippingMethods on AmazonOffer {
    shippingMethods {
      id
      label
      price {
        value
        displayValue
        currency
      }
      taxes {
        value
        displayValue
        currency
      }
      total {
        value
        displayValue
        currency
      }
    }
  }
`);

export const ShopifyShippingMethods = graphql(`
  fragment ShopifyShippingMethods on ShopifyOffer {
    shippingMethods {
      id
      label
      price {
        value
        displayValue
        currency
      }
      taxes {
        value
        displayValue
        currency
      }
      total {
        value
        displayValue
        currency
      }
    }
  }
`);

export const AmazonOffer = graphql(`
  fragment AmazonOffer on AmazonStore {
    offer {
      errors {
        code
        message
        details {
          ... on AmazonOfferErrorDetails {
            productIds
          }
        }
      }
      subtotal {
        value
        displayValue
        currency
      }
      margin {
        value
        displayValue
        currency
      }
      notAvailableIds
      ...AmazonShippingMethods
    }
  }
`);

export const ShopifyOffer = graphql(`
  fragment ShopifyOffer on ShopifyStore {
    offer {
      errors {
        code
        message
        details {
          ... on ShopifyOfferErrorDetails {
            variantIds
          }
        }
      }
      subtotal {
        value
        displayValue
        currency
      }
      margin {
        value
        displayValue
        currency
      }
      notAvailableIds
      ...ShopifyShippingMethods
    }
  }
`);

export const AmazonCartLines = graphql(`
  fragment AmazonCartLines on AmazonStore {
    cartLines {
      quantity
      product {
        title
        url
        vendor
        id
        description
        images {
          url
        }
        price {
          displayValue
          currency
          value
        }
        isAvailable
      }
    }
  }
`);

export const ShopifyCartLines = graphql(`
  fragment ShopifyCartLines on ShopifyStore {
    cartLines {
      quantity
      variant {
        ... on ShopifyVariant {
          title
          name
          image {
            url
          }
          price
          isAvailable
        }
      }
    }
  }
`);

export const Cart = graphql(`
  fragment Cart on CartResponse {
    cart {
      id
      ...BuyerIdentity @include(if: $fetchBuyerIdentity)
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
          ...AmazonCartLines @include(if: $fetchCartLines)
          isShippingRequired
          ...AmazonOffer @include(if: $fetchOffer)
          offer {
            ...AmazonShippingMethods @include(if: $fetchShippingMethods)
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
          ...ShopifyCartLines @include(if: $fetchCartLines)
          ...ShopifyOffer @include(if: $fetchOffer)
          offer {
            ...ShopifyShippingMethods @include(if: $fetchShippingMethods)
          }
        }
      }
    }
    errors {
      code
      message
    }
  }
`);
