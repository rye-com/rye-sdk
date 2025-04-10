import { graphql } from '../graphql';

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

export const ShippingMethod = graphql(`
  fragment ShippingMethod on ShippingMethod {
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
      shippingMethods {
        ...ShippingMethod
      }
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
      shippingMethods {
        ...ShippingMethod
      }
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

export const Price = graphql(`
  fragment Price on Price {
    currency
    displayValue
    value
  }
`);

export const Cart = graphql(`
  fragment Cart on CartResponse {
    cart {
      id
      attributes {
        key
        value
      }
      ...BuyerIdentity
      cost {
        isEstimated
        margin {
          ...Price
        }
        shipping {
          ...Price
        }
        subtotal {
          ...Price
        }
        tax {
          ...Price
        }
        total {
          ...Price
        }
      }
      stores {
        ... on AmazonStore {
          isSubmitted
          orderId
          requestId
          errors {
            code
            message
            details {
              productIds
              reasons {
                code
                productId
                reason
              }
            }
          }
          store
          ...AmazonCartLines
          isShippingRequired
          ...AmazonOffer
          offer {
            shippingMethods {
              ...ShippingMethod
            }
          }
        }
        ... on ShopifyStore {
          isSubmitted
          orderId
          requestId
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
            shippingMethods {
              ...ShippingMethod
            }
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

export const ProductDetails = graphql(`
  fragment ProductDetails on Product {
    id
    marketplace
    title
    description
    vendor
    url
    isAvailable
    tags
    images {
      url
    }
    price {
      value
      currency
      displayValue
    }
    ... on AmazonProduct {
      ASIN
      titleExcludingVariantName
      categories {
        name
        url
      }
      featureBullets
      ratingsTotal
      reviewsTotal
      variants {
        title
        image {
          url
          ... on AmazonImage {
            position
            width
            height
          }
        }
      }
      specifications {
        name
        value
      }
      color
      manufacturer
      weight
      firstAvailable
      dimensions
      modelNumber
    }
    ... on ShopifyProduct {
      descriptionHTML
      collectionHandle
      handle
      maxPrice
      minPrice
      productType
      createdAt
      publishedAt
      storeCanonicalURL
    }
  }
`);

export const ShopifyProductEdge = graphql(`
  fragment ShopifyProductEdge on ShopifyProductEdge {
    cursor
    node {
      ...ShopifyProduct
    }
  }
`);

export const ShopifyProduct = graphql(`
  fragment ShopifyProduct on ShopifyProduct {
    id
    title
    description
    vendor
    url
    marketplace
    isAvailable
    price {
      value
      currency
      displayValue
    }
    images {
      url
    }
    variants {
      title
      image {
        url
      }
    }
    descriptionHTML
    collectionHandle
    handle
    maxPrice
    minPrice
    productType
    createdAt
    publishedAt
    storeCanonicalURL
    storeDomain
    options {
      name
      position
      values
    }
  }
`);
