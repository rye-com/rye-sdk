# Rye SDK

The Rye SDK provides convenient access to the Rye API via the Rye client from which users can make queries and mutations easily.

## Installation

Install the package with:

```sh
npm install @rye-api/rye-sdk
# or
yarn add @rye-api/rye-sdk
```

## Usage

### Client creation

The client needs to be created with your account's API authorization header and Shopper IP, which is available in the [Rye Console](https://console.rye.com/account).

```ts
// Production
const ryeClient = new RyeClient('<AUTH_HEADER>', '<SHOPPER_IP>');

// Staging
const ryeClient = new RyeClient('<AUTH_HEADER>', '<SHOPPER_IP>', ENVIRONMENT.STAGING);
```

### Mutations

1. `requestProductByURL`

```ts
const result = await ryeClient.requestProductByUrl({
  input: {
    url: 'https://www.amazon.com/dp/B00A2KD8NY',
    marketplace: Marketplace.Amazon,
  },
});
```

2. `requestStoreByURL`

```ts
const result = await ryeClient.requestStoreByURL({
  input: {
    url: 'https://rye-test-store.myshopify.com',
  },
});
```

3. `createCart`

```ts
// Create cart without buyer identity
const result = await ryeClient.createCart({
  input: {
    items: {
      amazonCartItemsInput: [
        {
          quantity: 1,
          productId: 'B007W3DDUW',
        },
      ],
    },
    buyerIdentity: {
      firstName: '<FIRST_NAME>',
      lastName: '<LAST_NAME>',
      email: '<EMAIL>',
      phone: '<PHONE>',
      address1: '<ADDRESS_1>',
      address2: '<ADDRESS_2>',
      city: '<CITY>',
      provinceCode: '<PROVINCE_CODE>',
      countryCode: '<COUNTRY_CODE>',
      postalCode: '<POSTAL_CODE>',
    },
  },
});

// Create cart with buyer identity
const result = await ryeClient.createCart({
  input: {
    items: {
      amazonCartItemsInput: [
        {
          quantity: 1,
          productId: 'B007W3DDUW',
        },
      ],
    },
  },
  fetchBuyerIdentity: false, // Set to true to fetch buyer identity
  fetchOffer: false, // Set to true to fetch offers for each store
  fetchCartLines: false, // Set to true to fetch cart lines
  fetchShippingMethods: false, // Set to true to fetch shipping methods
});
```

4. `addCartItems`

```ts
const result = await ryeClient.addCartItems({
  input: {
    id: '<CART_ID>',
    items: {
      shopifyCartItemsInput: [
        {
          quantity: 1,
          variantId: '44346795295022',
        },
      ],
    },
  },
});
```

5. `deleteCartItems`

```ts
const result = await ryeClient.deleteCartItems({
  input: {
    id: '<CART_ID>',
    items: {
      shopifyProducts: [
        {
          variantId: '44346795295022',
        },
      ],
    },
  },
});
```

6. `updateCartItems`

```ts
const result = await ryeClient.updateCartItems({
  input: {
    id: '<CART_ID>',
    items: {
      amazonCartItemsInput: [
        {
          productId: 'B007W3DDUW',
          quantity: 2,
        },
      ],
    },
  },
});
```

7. `updateCartBuyerIdentity`

```ts
const result = await ryeClient.updateCartBuyerIdentity({
  input: {
    id: '<CART_ID>',
    buyerIdentity: {
      firstName: '<FIRST_NAME>',
      lastName: '<LAST_NAME>',
      email: '<EMAIL>',
      phone: '<PHONE>',
      address1: '<ADDRESS_1>',
      address2: '<ADDRESS_2>',
      city: '<CITY>',
      provinceCode: '<PROVINCE_CODE>',
      countryCode: '<COUNTRY_CODE>',
      postalCode: '<POSTAL_CODE>',
    },
  },
  fetchOffer: false, // Set to true to fetch offers for each store
  fetchCartLines: false, // Set to true to fetch cart lines
  fetchShippingMethods: false, // Set to true to fetch shipping methods
});
```

8. `updateCartSelectedShippingOptions`

```ts
const result = await ryeClient.updateCartSelectedShippingOptions({
  input: {
    id: '<CART_ID>',
    shippingOptions: [
      {
        shippingId: '55cfdaa8c7702fb7f57be90',
        store: 'rye-dev-store.myshopify.com',
      },
    ],
  },
  fetchBuyerIdentity: false, // Set to true to fetch buyer identity
  fetchOffer: false, // Set to true to fetch offers for each store
  fetchCartLines: false, // Set to true to fetch cart lines
  fetchShippingMethods: false, // Set to true to fetch shipping methods
});
```

9. `submitCart`

```ts
const result = await ryeClient.submitCart({
  input: {
    id: '<CART_ID>',
    token: '<PAYMENT_TOKEN>',
    billingAddress: {
      firstName: '<FIRST_NAME>',
      lastName: '<LAST_NAME>',
      email: '<EMAIL>',
      phone: '<PHONE>',
      address1: '<ADDRESS_1>',
      address2: '<ADDRESS_2>',
      city: '<CITY>',
      provinceCode: '<PROVINCE_CODE>',
      countryCode: '<COUNTRY_CODE>',
      postalCode: '<POSTAL_CODE>',
    },
  },
});
```

10. `removeCart`

```ts
const result = await ryeClient.removeCart({
  input: {
    id: '<CART_ID>',
  },
});
```

### Queries

1. `productByID`

```ts
const result = await ryeClient.getProductById({
  input: {
    id: 'B007W3DDUW',
    marketplace: 'AMAZON',
  },
});
```

2. `productsByDomainV2`

```ts
const result = await ryeClient.getProductsByDomainV2({
  input: {
    domain: 'hiutdenim.co.uk',
  },
  pagination: { limit: 3, offset: 2 },
});
```

3. `getCart`

```ts
const result = await ryeClient.getCart({
  id: '<CART_ID>',
  fetchBuyerIdentity: false, // Set to true to fetch buyer identity
  fetchOffer: false, // Set to true to fetch offers for each store
  fetchCartLines: false, // Set to true to fetch cart lines
  fetchShippingMethods: false, // Set to true to fetch shipping methods
});
```

4. `orderByID`

```ts
const result = await ryeClient.orderById({
  id: '<ORDER_ID>',
});
```

5. `checkoutByCartID`

```ts
const result = await ryeClient.checkoutByCartId({
  id: '<CART_ID>',
  fetchBuyerIdentity: false, // Set to true to fetch buyer identity
  fetchOffer: false, // Set to true to fetch offers for each store
  fetchCartLines: false, // Set to true to fetch cart lines
  fetchShippingMethods: false, // Set to true to fetch shipping methods
});
```

6. `shopifyApp`

```ts
const result = await ryeClient.getShopifyAppInformation({
  storeCanonicalDomain: 'dear-media-shop.myshopify.com',
});
```

7. `environmentToken`

```ts
const result = await ryeClient.getEnvironmentToken();
```

### Additional resources

- Documentation: https://docs.rye.com/
- Rye Console: https://console.rye.com/
- Tutorial: https://tutorial.rye.com/
- Website: https://rye.com/
- Contact us at: rye@dev.com
