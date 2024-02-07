/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment BuyerIdentity on Cart {\n    buyerIdentity {\n      firstName\n      lastName\n      address1\n      address2\n      city\n      provinceCode\n      countryCode\n      postalCode\n      email\n      phone\n    }\n  }\n':
    types.BuyerIdentityFragmentDoc,
  '\n  fragment AmazonShippingMethods on AmazonOffer {\n    shippingMethods {\n      id\n      label\n      price {\n        value\n        displayValue\n        currency\n      }\n      taxes {\n        value\n        displayValue\n        currency\n      }\n      total {\n        value\n        displayValue\n        currency\n      }\n    }\n  }\n':
    types.AmazonShippingMethodsFragmentDoc,
  '\n  fragment ShopifyShippingMethods on ShopifyOffer {\n    shippingMethods {\n      id\n      label\n      price {\n        value\n        displayValue\n        currency\n      }\n      taxes {\n        value\n        displayValue\n        currency\n      }\n      total {\n        value\n        displayValue\n        currency\n      }\n    }\n  }\n':
    types.ShopifyShippingMethodsFragmentDoc,
  '\n  fragment AmazonOffer on AmazonStore {\n    offer {\n      errors {\n        code\n        message\n        details {\n          ... on AmazonOfferErrorDetails {\n            productIds\n          }\n        }\n      }\n      subtotal {\n        value\n        displayValue\n        currency\n      }\n      margin {\n        value\n        displayValue\n        currency\n      }\n      notAvailableIds\n      ...AmazonShippingMethods\n    }\n  }\n':
    types.AmazonOfferFragmentDoc,
  '\n  fragment ShopifyOffer on ShopifyStore {\n    offer {\n      errors {\n        code\n        message\n        details {\n          ... on ShopifyOfferErrorDetails {\n            variantIds\n          }\n        }\n      }\n      subtotal {\n        value\n        displayValue\n        currency\n      }\n      margin {\n        value\n        displayValue\n        currency\n      }\n      notAvailableIds\n      ...ShopifyShippingMethods\n    }\n  }\n':
    types.ShopifyOfferFragmentDoc,
  '\n  fragment AmazonCartLines on AmazonStore {\n    cartLines {\n      quantity\n      product {\n        title\n        url\n        vendor\n        id\n        description\n        images {\n          url\n        }\n        price {\n          displayValue\n          currency\n          value\n        }\n        isAvailable\n      }\n    }\n  }\n':
    types.AmazonCartLinesFragmentDoc,
  '\n  fragment ShopifyCartLines on ShopifyStore {\n    cartLines {\n      quantity\n      variant {\n        ... on ShopifyVariant {\n          title\n          name\n          image {\n            url\n          }\n          price\n          isAvailable\n        }\n      }\n    }\n  }\n':
    types.ShopifyCartLinesFragmentDoc,
  '\n  query GetCart(\n    $id: ID!\n    $fetchBuyerIdentity: Boolean = true\n    $fetchShippingMethods: Boolean = true\n    $fetchOffer: Boolean = true\n    $fetchCartLines: Boolean = true\n  ) {\n    getCart(id: $id) {\n      cart {\n        id\n        ...BuyerIdentity @include(if: $fetchBuyerIdentity)\n        stores {\n          ... on AmazonStore {\n            isSubmitted\n            requestId\n            errors {\n              code\n              message\n              details {\n                productIds\n              }\n            }\n            store\n            ...AmazonCartLines @include(if: $fetchCartLines)\n            isShippingRequired\n            ...AmazonOffer @include(if: $fetchOffer)\n            offer {\n              ...AmazonShippingMethods @include(if: $fetchShippingMethods)\n            }\n          }\n          ... on ShopifyStore {\n            errors {\n              code\n              message\n              details {\n                variantIds\n              }\n            }\n            store\n            ...ShopifyCartLines @include(if: $fetchCartLines)\n            ...ShopifyOffer @include(if: $fetchOffer)\n            offer {\n              ...ShopifyShippingMethods @include(if: $fetchShippingMethods)\n            }\n          }\n        }\n      }\n      errors {\n        code\n        message\n      }\n    }\n  }\n':
    types.GetCartDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment BuyerIdentity on Cart {\n    buyerIdentity {\n      firstName\n      lastName\n      address1\n      address2\n      city\n      provinceCode\n      countryCode\n      postalCode\n      email\n      phone\n    }\n  }\n'
): (typeof documents)['\n  fragment BuyerIdentity on Cart {\n    buyerIdentity {\n      firstName\n      lastName\n      address1\n      address2\n      city\n      provinceCode\n      countryCode\n      postalCode\n      email\n      phone\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AmazonShippingMethods on AmazonOffer {\n    shippingMethods {\n      id\n      label\n      price {\n        value\n        displayValue\n        currency\n      }\n      taxes {\n        value\n        displayValue\n        currency\n      }\n      total {\n        value\n        displayValue\n        currency\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment AmazonShippingMethods on AmazonOffer {\n    shippingMethods {\n      id\n      label\n      price {\n        value\n        displayValue\n        currency\n      }\n      taxes {\n        value\n        displayValue\n        currency\n      }\n      total {\n        value\n        displayValue\n        currency\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ShopifyShippingMethods on ShopifyOffer {\n    shippingMethods {\n      id\n      label\n      price {\n        value\n        displayValue\n        currency\n      }\n      taxes {\n        value\n        displayValue\n        currency\n      }\n      total {\n        value\n        displayValue\n        currency\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment ShopifyShippingMethods on ShopifyOffer {\n    shippingMethods {\n      id\n      label\n      price {\n        value\n        displayValue\n        currency\n      }\n      taxes {\n        value\n        displayValue\n        currency\n      }\n      total {\n        value\n        displayValue\n        currency\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AmazonOffer on AmazonStore {\n    offer {\n      errors {\n        code\n        message\n        details {\n          ... on AmazonOfferErrorDetails {\n            productIds\n          }\n        }\n      }\n      subtotal {\n        value\n        displayValue\n        currency\n      }\n      margin {\n        value\n        displayValue\n        currency\n      }\n      notAvailableIds\n      ...AmazonShippingMethods\n    }\n  }\n'
): (typeof documents)['\n  fragment AmazonOffer on AmazonStore {\n    offer {\n      errors {\n        code\n        message\n        details {\n          ... on AmazonOfferErrorDetails {\n            productIds\n          }\n        }\n      }\n      subtotal {\n        value\n        displayValue\n        currency\n      }\n      margin {\n        value\n        displayValue\n        currency\n      }\n      notAvailableIds\n      ...AmazonShippingMethods\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ShopifyOffer on ShopifyStore {\n    offer {\n      errors {\n        code\n        message\n        details {\n          ... on ShopifyOfferErrorDetails {\n            variantIds\n          }\n        }\n      }\n      subtotal {\n        value\n        displayValue\n        currency\n      }\n      margin {\n        value\n        displayValue\n        currency\n      }\n      notAvailableIds\n      ...ShopifyShippingMethods\n    }\n  }\n'
): (typeof documents)['\n  fragment ShopifyOffer on ShopifyStore {\n    offer {\n      errors {\n        code\n        message\n        details {\n          ... on ShopifyOfferErrorDetails {\n            variantIds\n          }\n        }\n      }\n      subtotal {\n        value\n        displayValue\n        currency\n      }\n      margin {\n        value\n        displayValue\n        currency\n      }\n      notAvailableIds\n      ...ShopifyShippingMethods\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AmazonCartLines on AmazonStore {\n    cartLines {\n      quantity\n      product {\n        title\n        url\n        vendor\n        id\n        description\n        images {\n          url\n        }\n        price {\n          displayValue\n          currency\n          value\n        }\n        isAvailable\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment AmazonCartLines on AmazonStore {\n    cartLines {\n      quantity\n      product {\n        title\n        url\n        vendor\n        id\n        description\n        images {\n          url\n        }\n        price {\n          displayValue\n          currency\n          value\n        }\n        isAvailable\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ShopifyCartLines on ShopifyStore {\n    cartLines {\n      quantity\n      variant {\n        ... on ShopifyVariant {\n          title\n          name\n          image {\n            url\n          }\n          price\n          isAvailable\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment ShopifyCartLines on ShopifyStore {\n    cartLines {\n      quantity\n      variant {\n        ... on ShopifyVariant {\n          title\n          name\n          image {\n            url\n          }\n          price\n          isAvailable\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCart(\n    $id: ID!\n    $fetchBuyerIdentity: Boolean = true\n    $fetchShippingMethods: Boolean = true\n    $fetchOffer: Boolean = true\n    $fetchCartLines: Boolean = true\n  ) {\n    getCart(id: $id) {\n      cart {\n        id\n        ...BuyerIdentity @include(if: $fetchBuyerIdentity)\n        stores {\n          ... on AmazonStore {\n            isSubmitted\n            requestId\n            errors {\n              code\n              message\n              details {\n                productIds\n              }\n            }\n            store\n            ...AmazonCartLines @include(if: $fetchCartLines)\n            isShippingRequired\n            ...AmazonOffer @include(if: $fetchOffer)\n            offer {\n              ...AmazonShippingMethods @include(if: $fetchShippingMethods)\n            }\n          }\n          ... on ShopifyStore {\n            errors {\n              code\n              message\n              details {\n                variantIds\n              }\n            }\n            store\n            ...ShopifyCartLines @include(if: $fetchCartLines)\n            ...ShopifyOffer @include(if: $fetchOffer)\n            offer {\n              ...ShopifyShippingMethods @include(if: $fetchShippingMethods)\n            }\n          }\n        }\n      }\n      errors {\n        code\n        message\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetCart(\n    $id: ID!\n    $fetchBuyerIdentity: Boolean = true\n    $fetchShippingMethods: Boolean = true\n    $fetchOffer: Boolean = true\n    $fetchCartLines: Boolean = true\n  ) {\n    getCart(id: $id) {\n      cart {\n        id\n        ...BuyerIdentity @include(if: $fetchBuyerIdentity)\n        stores {\n          ... on AmazonStore {\n            isSubmitted\n            requestId\n            errors {\n              code\n              message\n              details {\n                productIds\n              }\n            }\n            store\n            ...AmazonCartLines @include(if: $fetchCartLines)\n            isShippingRequired\n            ...AmazonOffer @include(if: $fetchOffer)\n            offer {\n              ...AmazonShippingMethods @include(if: $fetchShippingMethods)\n            }\n          }\n          ... on ShopifyStore {\n            errors {\n              code\n              message\n              details {\n                variantIds\n              }\n            }\n            store\n            ...ShopifyCartLines @include(if: $fetchCartLines)\n            ...ShopifyOffer @include(if: $fetchOffer)\n            offer {\n              ...ShopifyShippingMethods @include(if: $fetchShippingMethods)\n            }\n          }\n        }\n      }\n      errors {\n        code\n        message\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
