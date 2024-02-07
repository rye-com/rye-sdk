/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date with time that follows the RFC3339Nano spec. Example: '2022-09-18T23:12:23-06:00' */
  Time: { input: any; output: any }
  /** A valid URL with a scheme of http, https */
  URL: { input: any; output: any }
}

export type AddressValidationErrorDetails = {
  __typename?: 'AddressValidationErrorDetails'
  /** Suggestion for the invalid field */
  suggestedValue: Scalars['String']['output']
}

export type AmazonCartItemsInput = {
  /** Amazon product ASIN */
  productId: Scalars['ID']['input']
  /** Number of products */
  quantity: Scalars['Int']['input']
}

export type AmazonCartLine = {
  __typename?: 'AmazonCartLine'
  /** Amazon product */
  product: AmazonProduct
  /** Number of products */
  quantity: Scalars['Int']['output']
}

/** Product category for the Amazon item. These are dynamic and can change over time */
export type AmazonCategory = {
  __typename?: 'AmazonCategory'
  /** Category ID for this Amazon product */
  categoryID: Scalars['ID']['output']
  /** The name of the category */
  name: Scalars['String']['output']
  /** Link the the product category */
  url: Scalars['URL']['output']
}

export type AmazonDeliveryEstimateRange = {
  __typename?: 'AmazonDeliveryEstimateRange'
  earliest: Scalars['Time']['output']
  latest: Scalars['Time']['output']
  productId: Scalars['String']['output']
}

/** Image preview for an Amazon product */
export type AmazonImage = Image & {
  __typename?: 'AmazonImage'
  /** Height of the image in pixels */
  height?: Maybe<Scalars['Int']['output']>
  /** Image order in a carousel */
  position?: Maybe<Scalars['Int']['output']>
  /** URL to the image */
  url: Scalars['URL']['output']
  /** Width of the image in pixels */
  width?: Maybe<Scalars['Int']['output']>
}

export type AmazonOffer = {
  __typename?: 'AmazonOffer'
  /** Offer errors */
  errors: Array<AmazonOfferError>
  /** The margin of the product */
  margin?: Maybe<Price>
  /** List of the non-available products for purchase */
  notAvailableIds: Array<Scalars['String']['output']>
  /** Estimated min and max dates that product will be delivered */
  productDeliveryEstimateRanges: Array<AmazonDeliveryEstimateRange>
  /** Shipping method selected by customer */
  selectedShippingMethod?: Maybe<ShippingMethod>
  /** List of shipping methods with label and calculated prices */
  shippingMethods: Array<ShippingMethod>
  /** The subtotal of the product */
  subtotal?: Maybe<Price>
}

export type AmazonOfferError = {
  __typename?: 'AmazonOfferError'
  /** The error code associated with the offer error */
  code: OfferErrorCode
  /** Additional details about the offer error */
  details?: Maybe<AmazonOfferErrorDetails>
  /** A human-readable error message */
  message: Scalars['String']['output']
}

export type AmazonOfferErrorDetails = {
  __typename?: 'AmazonOfferErrorDetails'
  /** The product IDs associated with the offer error from the metadata of the order */
  productIds?: Maybe<Array<Scalars['String']['output']>>
}

/** A product from Amazon */
export type AmazonProduct = Product & {
  __typename?: 'AmazonProduct'
  /** Amazon's canonical product ID. Learn more about it here: https://www.repricerexpress.com/amazon-asin/  */
  ASIN: Scalars['ID']['output']
  /** List of categories to which the product belongs */
  categories: Array<AmazonCategory>
  /** Product color */
  color?: Maybe<Scalars['String']['output']>
  /** Description of the product */
  description: Scalars['String']['output']
  /** Product dimensions. Example: '0.03 x 0.59 x 0.43 inches' */
  dimensions?: Maybe<Scalars['String']['output']>
  /** Amazon summary bullets about the product, found next to the product image.  */
  featureBullets: Array<Scalars['String']['output']>
  /** When the product was first listed on Amazon */
  firstAvailable?: Maybe<Scalars['Time']['output']>
  /** Product ASIN */
  id: Scalars['ID']['output']
  /** List of images for an amazon product */
  images: Array<Image>
  /** Specifies whether the product is available in-stock */
  isAvailable: Scalars['Boolean']['output']
  /** Manufacturer of the product */
  manufacturer?: Maybe<Scalars['String']['output']>
  /** Amazon */
  marketplace: Marketplace
  /** Model number from the manufacturer. Example: SDSQUAR-128G-GN6MA */
  modelNumber?: Maybe<Scalars['String']['output']>
  /** Product parent ID if the product has multiple variants */
  parentID?: Maybe<Scalars['ID']['output']>
  /** Price for an Amazon product item */
  price?: Maybe<Price>
  /** List of protection plans available for the product */
  protectionPlans: Array<AmazonProtectionPlan>
  /** Total number of rating for this item. Different from reviews which have a review associated with them. */
  ratingsTotal: Scalars['Int']['output']
  /** Total number of reviews for this item */
  reviewsTotal: Scalars['Int']['output']
  /** List of specifications describing the product */
  specifications: Array<AmazonSpecification>
  /** Secondary title for the product, below the title on Amazon */
  subtitle?: Maybe<AmazonSubtitle>
  /** Tags about the amazon product */
  tags: Array<Scalars['String']['output']>
  /** Product title */
  title: Scalars['String']['output']
  /** Amazon title minus any additional context of the variant */
  titleExcludingVariantName: Scalars['String']['output']
  /**
   * Canonical URL for the product.
   * Looks like https://{AMAZON_DOMAIN}/dp/{PRODUCT_ASIN}. Example: https://www.amazon.com/dp/B07B4QZQZQ"
   */
  url: Scalars['URL']['output']
  /** Product variants such as the different colors or sizes of a product */
  variants: Array<Variant>
  /** Product brand */
  vendor: Scalars['String']['output']
  /** List of videos associated describing the product */
  videos: Array<AmazonVideo>
  /** Weight of the product. Example '0.16 ounces' */
  weight?: Maybe<Scalars['String']['output']>
}

export type AmazonProductIdInput = {
  /** ID of the Amazon product */
  productId: Scalars['ID']['input']
}

/** Product protection plans offered by the seller or manufacturer */
export type AmazonProtectionPlan = {
  __typename?: 'AmazonProtectionPlan'
  /** Protection plan ID */
  id: Scalars['ID']['output']
  /** Price of the protection plan */
  price: Price
  /** Title of the protection plan */
  title: Scalars['String']['output']
}

/** Product specification */
export type AmazonSpecification = {
  __typename?: 'AmazonSpecification'
  /** Name of the specification. Example: 'RAM' */
  name: Scalars['String']['output']
  /** Value of the specification. Example: '8 GB' */
  value: Scalars['String']['output']
}

export type AmazonStore = {
  __typename?: 'AmazonStore'
  /** List of Amazon products to purchase */
  cartLines: Array<AmazonCartLine>
  /** Contains errors related to a specific store */
  errors: Array<AmazonStoreError>
  /** Indicates whether the store contains digital products only. When `true` means that the store contains only digital products, when `false` means that the store contains at least one physical product. */
  isShippingRequired: Scalars['Boolean']['output']
  /** True if the store items ended up with a successful checkout */
  isSubmitted: Scalars['Boolean']['output']
  /** Information about taxes, prices and shipping methods */
  offer?: Maybe<AmazonOffer>
  /** A unique identifier which will be used for getting information about the order after the cart is submitted */
  requestId: Scalars['String']['output']
  /** Countries that the store ships to. */
  shipsToCountries?: Maybe<Array<Country>>
  /** Amazon store name */
  store: Scalars['String']['output']
}

export type AmazonStoreError = {
  __typename?: 'AmazonStoreError'
  /** Error code */
  code: StoreErrorCode
  /** Additional error information */
  details?: Maybe<AmazonStoreErrorDetails>
  /** Error message related to the Store */
  message: Scalars['String']['output']
}

export type AmazonStoreErrorDetails = {
  __typename?: 'AmazonStoreErrorDetails'
  productIds?: Maybe<Array<Scalars['String']['output']>>
}

/** Contains a secondary title, usually below the title of the product on Amazon */
export type AmazonSubtitle = {
  __typename?: 'AmazonSubtitle'
  /** The subtitle of the product */
  text: Scalars['String']['output']
  /** Link on the subtitle which leads to the manufacturer page on Amazon */
  url: Scalars['URL']['output']
}

/** Product variants such as different colors or dimensions of a product */
export type AmazonVariant = Variant & {
  __typename?: 'AmazonVariant'
  /** Dimensions for this particular variant */
  dimensions: Array<AmazonVariantDimension>
  /** Variant identifier */
  id: Scalars['ID']['output']
  /** Image for this specific variant */
  image: Image
  /** Title of the variant */
  title: Scalars['String']['output']
  /** URL to the product page for this specific variant */
  url: Scalars['URL']['output']
}

/** Dimensions of an Amazon product variant */
export type AmazonVariantDimension = {
  __typename?: 'AmazonVariantDimension'
  /** Name of the dimension */
  name: Scalars['String']['output']
  /** Value of the dimension */
  value: Scalars['String']['output']
}

/** Video describing an Amazon product */
export type AmazonVideo = {
  __typename?: 'AmazonVideo'
  /** Duration of the video */
  durationSeconds: Scalars['Int']['output']
  /** Height of the video */
  height: Scalars['Int']['output']
  /** URL to the thumbnail image for the video */
  thumbnailURL: Scalars['URL']['output']
  /** Title for the video */
  title: Scalars['String']['output']
  /** URL to the video */
  url: Scalars['URL']['output']
  /** Width of the video */
  width: Scalars['Int']['output']
}

export type BillingAddressInput = {
  /** First line of the address */
  address1: Scalars['String']['input']
  /** Second line of the address, such as an apartment number */
  address2?: InputMaybe<Scalars['String']['input']>
  /** Name of the city, district, village, or town */
  city: Scalars['String']['input']
  /** The two-letter code for the country of the address. */
  countryCode: Country
  /** First name of the person */
  firstName: Scalars['String']['input']
  /** Last name of the person */
  lastName: Scalars['String']['input']
  /** 10 digit phone number */
  phone?: InputMaybe<Scalars['String']['input']>
  /** Area postal code */
  postalCode: Scalars['String']['input']
  /** The code for the region of the address, such as the province, state, or district. */
  provinceCode?: InputMaybe<Scalars['String']['input']>
}

export type BuyerIdentity = {
  __typename?: 'BuyerIdentity'
  /** First line of the address */
  address1?: Maybe<Scalars['String']['output']>
  /** Second line of the address, such as an apartment number */
  address2?: Maybe<Scalars['String']['output']>
  /** Name of the city, district, village, or town */
  city?: Maybe<Scalars['String']['output']>
  /** 2 letter country code */
  countryCode: Country
  /** Email address of the person or company. */
  email?: Maybe<Scalars['String']['output']>
  /** First name of the person or company. */
  firstName?: Maybe<Scalars['String']['output']>
  /** Last name of the person or company. */
  lastName?: Maybe<Scalars['String']['output']>
  /** 10 digit phone number */
  phone?: Maybe<Scalars['String']['output']>
  /** Area postal code */
  postalCode?: Maybe<Scalars['String']['output']>
  /** 2 letter state code */
  provinceCode?: Maybe<Scalars['String']['output']>
}

export type BuyerIdentityInput = {
  /** First line of the address */
  address1?: InputMaybe<Scalars['String']['input']>
  /** Second line of the address, such as an apartment number */
  address2?: InputMaybe<Scalars['String']['input']>
  /** Name of the city, district, village, or town */
  city?: InputMaybe<Scalars['String']['input']>
  /** 2 letter country code */
  countryCode: Country
  /** Email address of the person or company. */
  email?: InputMaybe<Scalars['String']['input']>
  /** First name of the person or company. */
  firstName?: InputMaybe<Scalars['String']['input']>
  /** Last name of the person or company. */
  lastName?: InputMaybe<Scalars['String']['input']>
  /** 10 digit phone number */
  phone?: InputMaybe<Scalars['String']['input']>
  /** Area postal code */
  postalCode?: InputMaybe<Scalars['String']['input']>
  /** 2 letter state code */
  provinceCode?: InputMaybe<Scalars['String']['input']>
}

export type CancelAmazonOrderItem = {
  __typename?: 'CancelAmazonOrderItem'
  amazonOrderId: Scalars['ID']['output']
  failReason?: Maybe<Scalars['String']['output']>
  status: CancelOrderStatus
}

export type CancelAmazonOrderResult = {
  __typename?: 'CancelAmazonOrderResult'
  items: Array<CancelAmazonOrderItem>
}

export type CancelOrderError = {
  __typename?: 'CancelOrderError'
  /** Error code */
  code: CancelOrderErrorCode
  /** Error message related to the cancellation */
  message: Scalars['String']['output']
}

export enum CancelOrderErrorCode {
  /** The order cancellation is already in progress */
  CancellationInProgress = 'CANCELLATION_IN_PROGRESS',
  /** The window for cancelling the order has expired */
  CancelWindowExpired = 'CANCEL_WINDOW_EXPIRED',
  /** The order cancellation is not supported */
  NotSupported = 'NOT_SUPPORTED',
  /** The order has already been cancelled */
  OrderAlreadyCancelled = 'ORDER_ALREADY_CANCELLED',
  /** The order cannot be cancelled as it has already been shipped */
  OrderAlreadyShipped = 'ORDER_ALREADY_SHIPPED',
  /** The order was not found */
  OrderNotFound = 'ORDER_NOT_FOUND',
  /** The order cannot be cancelled as it is currently being shipped */
  OrderShippingInProgress = 'ORDER_SHIPPING_IN_PROGRESS',
  /** A manual cancellation request is required */
  RequestManualCancellation = 'REQUEST_MANUAL_CANCELLATION',
  /** The dev does not have permission to cancel order */
  Unauthorized = 'UNAUTHORIZED',
}

export type CancelOrderInput = {
  orderId: Scalars['ID']['input']
}

export type CancelOrderResponse = {
  __typename?: 'CancelOrderResponse'
  error?: Maybe<CancelOrderError>
  result?: Maybe<CancelOrderResult>
}

export type CancelOrderResult =
  | CancelAmazonOrderResult
  | CancelShopifyOrderResult

export enum CancelOrderStatus {
  /** The order has been successfully cancelled */
  Cancelled = 'CANCELLED',
  /** Cancelation failed. Could either be an error canceling the order or cancelation failed because order already shipped or about to be shipped */
  CancelFailed = 'CANCEL_FAILED',
  /** The order cancellation is currently being processed */
  CancelProcessing = 'CANCEL_PROCESSING',
}

export type CancelShopifyOrderResult = {
  __typename?: 'CancelShopifyOrderResult'
  status: CancelOrderStatus
}

export type Cart = {
  __typename?: 'Cart'
  /** The buyer identity to calculate shipping options */
  buyerIdentity?: Maybe<BuyerIdentity>
  /** The costs that the buyer will pay at checkout */
  cost?: Maybe<CartCost>
  /** Cart ID */
  id: Scalars['ID']['output']
  /** Indicates whether the cart contains digital products only. When `true` means that the cart contains only digital products, when `false` means that the cart contains at least one physical product, if null, then the cart is empty */
  isShippingRequired?: Maybe<Scalars['Boolean']['output']>
  /** Collection of stores with added products */
  stores: Array<Store>
}

export type CartBuyerIdentityUpdateInput = {
  /** Updated buyer identity information */
  buyerIdentity: BuyerIdentityInput
  /** ID of the cart to update */
  id: Scalars['ID']['input']
  /** Flag indicating whether email marketing is allowed */
  isEmailMarketingAllowed?: InputMaybe<Scalars['Boolean']['input']>
}

export type CartCost = {
  __typename?: 'CartCost'
  /** Whether the cost is estimated */
  isEstimated: Scalars['Boolean']['output']
  /** The total margin amount */
  margin: Price
  /** The shipping amount for the customer to pay at checkout */
  shipping?: Maybe<Price>
  /** The amount, before taxes and cart-level discounts, for the customer to pay */
  subtotal: Price
  /** The tax amount for the customer to pay at checkout */
  tax?: Maybe<Price>
  /** The total amount for the customer to pay */
  total?: Maybe<Price>
}

export type CartCreateInput = {
  /** The buyer identity information */
  buyerIdentity?: InputMaybe<BuyerIdentityInput>
  /** Flag indicating whether email marketing is allowed */
  isEmailMarketingAllowed?: InputMaybe<Scalars['Boolean']['input']>
  /** The items to add to the cart */
  items: CartItemsInput
}

export type CartDeleteInput = {
  /** ID of the cart to delete */
  id: Scalars['ID']['input']
}

export type CartError = {
  __typename?: 'CartError'
  /** Error code */
  code: CartErrorCode
  /** Additional error information */
  details?: Maybe<CartErrorDetails>
  /** Error message related to the cart */
  message: Scalars['String']['output']
}

export enum CartErrorCode {
  /** The shipping address is ambiguous and cannot be verified. */
  BuyerIdentityAddressAmbiguous = 'BUYER_IDENTITY_ADDRESS_AMBIGUOUS',
  /** The address in the buyer's identity is invalid */
  BuyerIdentityInvalidAddress = 'BUYER_IDENTITY_INVALID_ADDRESS',
  /** The city in the buyer's identity is invalid */
  BuyerIdentityInvalidCity = 'BUYER_IDENTITY_INVALID_CITY',
  /** The country in the buyer's identity is invalid */
  BuyerIdentityInvalidCountry = 'BUYER_IDENTITY_INVALID_COUNTRY',
  /** The email address in the buyer's identity is invalid */
  BuyerIdentityInvalidEmail = 'BUYER_IDENTITY_INVALID_EMAIL',
  /** The first name in the buyer's identity is invalid */
  BuyerIdentityInvalidFirstName = 'BUYER_IDENTITY_INVALID_FIRST_NAME',
  /** The last name in the buyer's identity is invalid */
  BuyerIdentityInvalidLastName = 'BUYER_IDENTITY_INVALID_LAST_NAME',
  /** The phone number in the buyer's identity is invalid */
  BuyerIdentityInvalidPhone = 'BUYER_IDENTITY_INVALID_PHONE',
  /** The postal code in the buyer's identity is invalid */
  BuyerIdentityInvalidPostalCode = 'BUYER_IDENTITY_INVALID_POSTAL_CODE',
  /** The province in the buyer's identity is invalid */
  BuyerIdentityInvalidProvince = 'BUYER_IDENTITY_INVALID_PROVINCE',
  /** Modification of the cart is forbidden. Usually, this is because it has been submitted */
  CartModificationForbidden = 'CART_MODIFICATION_FORBIDDEN',
  /** A product could not be found by provided variant or product ID */
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  /** For Shopify stores - the store's Shopify API is temporarily unavailable for a reason outside Rye's control */
  ShopifyServiceTemporarilyUnavailable = 'SHOPIFY_SERVICE_TEMPORARILY_UNAVAILABLE',
  /** The specified store could not be found in our system at the time of request */
  StoreNotFound = 'STORE_NOT_FOUND',
  /** A store operation (update, delete, or add) failed */
  StoreOperationFailed = 'STORE_OPERATION_FAILED',
}

export type CartErrorDetails = AddressValidationErrorDetails

export type CartItemsAddInput = {
  /** ID of the cart to add items to */
  id: Scalars['ID']['input']
  /** Items to be added to the cart */
  items: CartItemsInput
}

export type CartItemsDeleteInput = {
  /** The ID of the cart */
  id: Scalars['ID']['input']
  /** The items to be deleted from the cart */
  items: DeleteCartLinesInput
}

export type CartItemsInput = {
  /** Amazon cart items input */
  amazonCartItemsInput?: InputMaybe<Array<AmazonCartItemsInput>>
  /** Shopify cart items input */
  shopifyCartItemsInput?: InputMaybe<Array<ShopifyCartItemsInput>>
}

export type CartItemsUpdateInput = {
  /** ID of the cart to update */
  id: Scalars['ID']['input']
  /** Updated cart items */
  items: CartItemsInput
}

export type CartLine = AmazonCartLine | ShopifyCartLine

export type CartResponse = {
  __typename?: 'CartResponse'
  /** Cart data */
  cart: Cart
  /** Contains errors related to the cart */
  errors: Array<CartError>
}

export type CartSubmitInput = {
  /** Billing address information */
  billingAddress?: InputMaybe<BillingAddressInput>
  /** ID of the cart to submit */
  id: Scalars['ID']['input']
  /** Selected shipping options for the cart */
  selectedShippingOptions?: InputMaybe<Array<SelectedShippingOption>>
  /** Represents tokenized credit card value */
  token?: InputMaybe<Scalars['String']['input']>
}

export type Checkout = {
  __typename?: 'Checkout'
  /** The cart associated with the checkout */
  cart: Cart
  /** The list of orders associated with the checkout */
  orders: Array<Order>
  /** The status of the checkout */
  status: CheckoutStatus
}

/** The `CheckoutStatus` enum defines the various states a checkout can be in. */
export enum CheckoutStatus {
  /** The checkout requires further action to be processed. */
  ActionRequired = 'ACTION_REQUIRED',
  /** The cancellation of the checkout is in progress. */
  CancellationInProgress = 'CANCELLATION_IN_PROGRESS',
  /** The cancellation of the order has been requested. */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /** The checkout has been cancelled. */
  Cancelled = 'CANCELLED',
  /** The checkout processing has failed. */
  Failed = 'FAILED',
  /** The checkout has orders with different statuses. Should check each individual status seperately. */
  Mixed = 'MIXED',
  /** The checkout processing has been partially successful. */
  PartiallySucceeded = 'PARTIALLY_SUCCEEDED',
  /** The checkout has been created but not yet processed. */
  Pending = 'PENDING',
  /** The checkout is currently being processed. */
  Processing = 'PROCESSING',
  /** The checkout processing has been successfully completed. */
  Succeeded = 'SUCCEEDED',
}

export type CompletePaymentChallenge = {
  __typename?: 'CompletePaymentChallenge'
  redirectURL: Scalars['URL']['output']
}

/** ISO country code. */
export enum Country {
  /** Ascension Island */
  Ac = 'AC',
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Netherlands Antilles. */
  An = 'AN',
  /** Angola */
  Ao = 'AO',
  /** Antarctica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei Darussalam */
  Bn = 'BN',
  /** Bolivia (Plurinational State of) */
  Bo = 'BO',
  /** Bonaire, Sint Eustatius and Saba */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Congo, Democratic Republic of the */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Côte d'Ivoire */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands (Malvinas) */
  Fk = 'FK',
  /** Micronesia (Federated States of) */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom of Great Britain and Northern Ireland */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran (Islamic Republic of) */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Korea (Democratic People's Republic of) */
  Kp = 'KP',
  /** Korea, Republic of */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova, Republic of */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin (French part) */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine, State of */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russian Federation */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten (Dutch part) */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Tristan da Cunha */
  Ta = 'TA',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Türkiye */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan, Province of China */
  Tw = 'TW',
  /** Tanzania, United Republic of */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Holy See */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela (Bolivarian Republic of) */
  Ve = 'VE',
  /** Virgin Islands (British) */
  Vg = 'VG',
  /** Virgin Islands (U.S.) */
  Vi = 'VI',
  /** Viet Nam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Kosovo */
  Xk = 'XK',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown Region */
  Zz = 'ZZ',
}

/** ISO currency code. */
export enum Currency {
  /** United Arab Emirates Dirham. */
  Aed = 'AED',
  /** Afghan Afghani. */
  Afn = 'AFN',
  /** Albanian Lek. */
  All = 'ALL',
  /** Armenian Dram. */
  Amd = 'AMD',
  /** Netherlands Antillean Gulden. */
  Ang = 'ANG',
  /** Angolan Kwanza. */
  Aoa = 'AOA',
  /** Argentine Peso. */
  Ars = 'ARS',
  /** Australian Dollar. */
  Aud = 'AUD',
  /** Aruban Florin. */
  Awg = 'AWG',
  /** Azerbaijani Manat. */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark. */
  Bam = 'BAM',
  /** Barbadian Dollar. */
  Bbd = 'BBD',
  /** Bangladeshi Taka. */
  Bdt = 'BDT',
  /** Bulgarian Lev. */
  Bgn = 'BGN',
  /** Bahraini Dinar. */
  Bhd = 'BHD',
  /** Burundian Franc. */
  Bif = 'BIF',
  /** Bermudian Dollar. */
  Bmd = 'BMD',
  /** Brunei Dollar. */
  Bnd = 'BND',
  /** Bolivian Boliviano. */
  Bob = 'BOB',
  /** Brazilian Real. */
  Brl = 'BRL',
  /** Bahamian Dollar. */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum. */
  Btn = 'BTN',
  /** Botswana Pula. */
  Bwp = 'BWP',
  /** Belarusian Ruble. */
  Byn = 'BYN',
  /** Belarusian Ruble. */
  Byr = 'BYR',
  /** Belize Dollar. */
  Bzd = 'BZD',
  /** Canadian Dollar. */
  Cad = 'CAD',
  /** Congolese Franc. */
  Cdf = 'CDF',
  /** Swiss Franc. */
  Chf = 'CHF',
  /** Unidad de Fomento. */
  Clf = 'CLF',
  /** Chilean Peso. */
  Clp = 'CLP',
  /** Chinese Renminbi Yuan. */
  Cny = 'CNY',
  /** Colombian Peso. */
  Cop = 'COP',
  /** Costa Rican Colón. */
  Crc = 'CRC',
  /** Cuban Convertible Peso. */
  Cuc = 'CUC',
  /** Cuban Peso. */
  Cup = 'CUP',
  /** Cape Verdean Escudo. */
  Cve = 'CVE',
  /** Cypriot pound. */
  Cyp = 'CYP',
  /** Czech Koruna. */
  Czk = 'CZK',
  /** Djiboutian Franc. */
  Djf = 'DJF',
  /** Danish Krone. */
  Dkk = 'DKK',
  /** Dominican Peso. */
  Dop = 'DOP',
  /** Algerian Dinar. */
  Dzd = 'DZD',
  /** Estonian Kroon. */
  Eek = 'EEK',
  /** Egyptian Pound. */
  Egp = 'EGP',
  /** Eritrean Nakfa. */
  Ern = 'ERN',
  /** Ethiopian Birr. */
  Etb = 'ETB',
  /** Euro. */
  Eur = 'EUR',
  /** Fijian Dollar. */
  Fjd = 'FJD',
  /** Falkland Pound. */
  Fkp = 'FKP',
  /** British Pound. */
  Gbp = 'GBP',
  /** British Penny. */
  Gbx = 'GBX',
  /** Georgian Lari. */
  Gel = 'GEL',
  /** Guernsey Pound. */
  Ggp = 'GGP',
  /** Ghanaian Cedi. */
  Ghc = 'GHC',
  /** Ghanaian Cedi. */
  Ghs = 'GHS',
  /** Gibraltar Pound. */
  Gip = 'GIP',
  /** Gambian Dalasi. */
  Gmd = 'GMD',
  /** Guinean Franc. */
  Gnf = 'GNF',
  /** Guatemalan Quetzal. */
  Gtq = 'GTQ',
  /** Guyanese Dollar. */
  Gyd = 'GYD',
  /** Hong Kong Dollar. */
  Hkd = 'HKD',
  /** Honduran Lempira. */
  Hnl = 'HNL',
  /** Croatian Kuna. */
  Hrk = 'HRK',
  /** Haitian Gourde. */
  Htg = 'HTG',
  /** Hungarian Forint. */
  Huf = 'HUF',
  /** Indonesian Rupiah. */
  Idr = 'IDR',
  /** Israeli New Sheqel. */
  Ils = 'ILS',
  /** Isle of Man Pound. */
  Imp = 'IMP',
  /** Indian Rupee. */
  Inr = 'INR',
  /** Iraqi Dinar. */
  Iqd = 'IQD',
  /** Iranian Rial. */
  Irr = 'IRR',
  /** Icelandic Króna. */
  Isk = 'ISK',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jamaican Dollar. */
  Jmd = 'JMD',
  /** Jordanian Dinar. */
  Jod = 'JOD',
  /** Japanese Yen. */
  Jpy = 'JPY',
  /** Kenyan Shilling. */
  Kes = 'KES',
  /** Kyrgyzstani Som. */
  Kgs = 'KGS',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Kiribati Dollar. */
  Kid = 'KID',
  /** Comorian Franc. */
  Kmf = 'KMF',
  /** North Korean Won. */
  Kpw = 'KPW',
  /** South Korean Won. */
  Krw = 'KRW',
  /** Kuwaiti Dinar. */
  Kwd = 'KWD',
  /** Cayman Islands Dollar. */
  Kyd = 'KYD',
  /** Kazakhstani Tenge. */
  Kzt = 'KZT',
  /** Lao Kip. */
  Lak = 'LAK',
  /** Lebanese Pound. */
  Lbp = 'LBP',
  /** Sri Lankan Rupee. */
  Lkr = 'LKR',
  /** Liberian Dollar. */
  Lrd = 'LRD',
  /** Lesotho Loti. */
  Lsl = 'LSL',
  /** Lithuanian Litas. */
  Ltl = 'LTL',
  /** Latvian Lats. */
  Lvl = 'LVL',
  /** Libyan Dinar. */
  Lyd = 'LYD',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Moldovan Leu. */
  Mdl = 'MDL',
  /** Malagasy Ariary. */
  Mga = 'MGA',
  /** Macedonian Denar. */
  Mkd = 'MKD',
  /** Myanmar Kyat. */
  Mmk = 'MMK',
  /** Mongolian Tögrög. */
  Mnt = 'MNT',
  /** Macanese Pataca. */
  Mop = 'MOP',
  /** Mauritanian Ouguiya. */
  Mro = 'MRO',
  /** Mauritanian New Ouguiya. */
  Mru = 'MRU',
  /** Maltese Lira. */
  Mtl = 'MTL',
  /** Mauritian Rupee. */
  Mur = 'MUR',
  /** Maldivian Rufiyaa. */
  Mvr = 'MVR',
  /** Malawian Kwacha. */
  Mwk = 'MWK',
  /** Mexican Peso. */
  Mxn = 'MXN',
  /** Malaysian Ringgit. */
  Myr = 'MYR',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nigerian Naira. */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba. */
  Nio = 'NIO',
  /** Norwegian Krone. */
  Nok = 'NOK',
  /** Nepalese Rupee. */
  Npr = 'NPR',
  /** New Zealand Dollar. */
  Nzd = 'NZD',
  /** Omani Rial. */
  Omr = 'OMR',
  /** Panamanian Balboa. */
  Pab = 'PAB',
  /** Peruvian Sol. */
  Pen = 'PEN',
  /** Papua New Guinean Kina. */
  Pgk = 'PGK',
  /** Philippine Peso. */
  Php = 'PHP',
  /** Pakistani Rupee. */
  Pkr = 'PKR',
  /** Polish Złoty. */
  Pln = 'PLN',
  /** Paraguayan Guaraní. */
  Pyg = 'PYG',
  /** Qatari Riyal. */
  Qar = 'QAR',
  /** Romanian Leu. */
  Ron = 'RON',
  /** Serbian Dinar. */
  Rsd = 'RSD',
  /** Russian Ruble. */
  Rub = 'RUB',
  /** Rwandan Franc. */
  Rwf = 'RWF',
  /** Saudi Riyal. */
  Sar = 'SAR',
  /** Solomon Islands Dollar. */
  Sbd = 'SBD',
  /** Seychellois Rupee. */
  Scr = 'SCR',
  /** Sudanese Pound. */
  Sdg = 'SDG',
  /** Swedish Krona. */
  Sek = 'SEK',
  /** Singapore Dollar. */
  Sgd = 'SGD',
  /** Saint Helenian Pound. */
  Shp = 'SHP',
  /** Slovak Koruna. */
  Skk = 'SKK',
  /** Sierra Leonean Leone. */
  Sll = 'SLL',
  /** Somali Shilling. */
  Sos = 'SOS',
  /** Surinamese Dollar. */
  Srd = 'SRD',
  /** South Sudanese Pound. */
  Ssp = 'SSP',
  /** São Tomé and Príncipe Dobra. */
  Std = 'STD',
  /** Salvadoran Colón. */
  Svc = 'SVC',
  /** Syrian Pound. */
  Syp = 'SYP',
  /** Swazi Lilangeni. */
  Szl = 'SZL',
  /** Thai Baht. */
  Thb = 'THB',
  /** Tajikistani Somoni. */
  Tjs = 'TJS',
  /** Turkmenistani Manat. */
  Tmm = 'TMM',
  /** Turkmenistani Manat. */
  Tmt = 'TMT',
  /** Tunisian Dinar. */
  Tnd = 'TND',
  /** Tongan Paʻanga. */
  Top = 'TOP',
  /** Turkish Lira. */
  Try = 'TRY',
  /** Trinidad and Tobago Dollar. */
  Ttd = 'TTD',
  /** New Taiwan Dollar. */
  Twd = 'TWD',
  /** Tanzanian Shilling. */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia. */
  Uah = 'UAH',
  /** Ugandan Shilling. */
  Ugx = 'UGX',
  /** United States Dollar. */
  Usd = 'USD',
  /** Uruguayan Peso. */
  Uyu = 'UYU',
  /** Uzbekistan Som. */
  Uzs = 'UZS',
  /** Venezuelan Bolívar. */
  Veb = 'VEB',
  /** Venezuelan Bolívar fuerte. */
  Vef = 'VEF',
  /** Venezuelan Bolívar soberano. */
  Ves = 'VES',
  /** Vietnamese Đồng. */
  Vnd = 'VND',
  /** Vanuatu Vatu. */
  Vuv = 'VUV',
  /** Samoan Tala. */
  Wst = 'WST',
  /** Central African Cfa Franc. */
  Xaf = 'XAF',
  /** Silver (Troy Ounce). */
  Xag = 'XAG',
  /** Gold (Troy Ounce). */
  Xau = 'XAU',
  /** European Composite Unit. */
  Xba = 'XBA',
  /** European Monetary Unit. */
  Xbb = 'XBB',
  /** European Unit of Account 9. */
  Xbc = 'XBC',
  /** European Unit of Account 17. */
  Xbd = 'XBD',
  /** East Caribbean Dollar. */
  Xcd = 'XCD',
  /** Special Drawing Rights. */
  Xdr = 'XDR',
  /** UIC Franc. */
  Xfu = 'XFU',
  /** West African Cfa Franc. */
  Xof = 'XOF',
  /** Palladium. */
  Xpd = 'XPD',
  /** Cfp Franc. */
  Xpf = 'XPF',
  /** Platinum. */
  Xpt = 'XPT',
  /** Codes specifically reserved for testing purposes. */
  Xts = 'XTS',
  /** Yemeni Rial. */
  Yer = 'YER',
  /** South African Rand. */
  Zar = 'ZAR',
  /** Zambian Kwacha. */
  Zmk = 'ZMK',
  /** Zambian Kwacha. */
  Zmw = 'ZMW',
  /** Zimbabwean Dollar. */
  Zwd = 'ZWD',
  /** Zimbabwean Dollar. */
  Zwl = 'ZWL',
  /** Zimbabwean Dollar. */
  Zwn = 'ZWN',
  /** Zimbabwean Dollar. */
  Zwr = 'ZWR',
}

export type DeleteCartLinesInput = {
  /** List of Amazon products to be deleted from the cart */
  amazonProducts?: InputMaybe<Array<AmazonProductIdInput>>
  /** List of Shopify products to be deleted from the cart */
  shopifyProducts?: InputMaybe<Array<ShopifyVariantIdInput>>
}

export type DeletedCart = {
  __typename?: 'DeletedCart'
  /** ID of deleted cart */
  deletedId: Scalars['ID']['output']
}

export type EnvironmentTokenResponse = {
  __typename?: 'EnvironmentTokenResponse'
  /** Environment token */
  token: Scalars['String']['output']
}

/** Common Image interface implemented across different image fields */
export type Image = {
  url: Scalars['URL']['output']
}

export type IntegratedShopifyStore = {
  __typename?: 'IntegratedShopifyStore'
  /** The domain of the Shopify store */
  canonicalDomain: Scalars['String']['output']
  /** Shopify collection connection for the store. Default pagination: `first` is 20, max is 20 */
  collectionsConnection: ShopifyCollectionsConnection
  /** Shopify merchant commission information set between user and specified Shopify store */
  commission: ShopifyMerchantCommission
  /** The logo image url of Shopify store */
  logoUrl?: Maybe<Scalars['URL']['output']>
  /** IDs of the Shopify store products */
  productsByIDs: Array<Maybe<ShopifyProduct>>
}

export type IntegratedShopifyStoreCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

export type IntegratedShopifyStoreProductsByIDsArgs = {
  ids: Array<Scalars['ID']['input']>
}

/** Online marketplaces / retailers */
export enum Marketplace {
  Amazon = 'AMAZON',
  Shopify = 'SHOPIFY',
}

/** Mutations to perform actions with Rye's API */
export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Adds only non-existing products in a Cart.
   * Skips already existing products.
   */
  addCartItems: CartResponse
  /** Request an order to be cancelled by Rye's API. */
  cancelOrder: CancelOrderResponse
  /** Create a Cart with buyer identity details */
  createCart: CartResponse
  /**
   * Removes existing products in a Cart.
   * Returns an error if prompted to delete non-existing product.
   */
  deleteCartItems: CartResponse
  /** Proposal to update merchant commission */
  proposeShopifyMerchantCommission: ShopifyMerchantCommission
  /** Remove a Cart by ID */
  removeCart: DeletedCart
  /**
   * Request a product to be tracked by Rye's API. Products will be refreshed on some interval.
   * A product must be requested before it can be queried.
   */
  requestProductByURL: RequestProductResponse
  /**
   * Request a store to be tracked by Rye's API. Store products will be refreshed on some interval.
   * A store must be requested before it's products can be queried. Store requests currently only available
   * for Shopify.
   */
  requestStoreByURL: RequestStoreResponse
  /** Submit a Cart for the checkout */
  submitCart: SubmitCartResult
  /** Updates buyer identity if not provided in 'createCart' mutation */
  updateCartBuyerIdentity: CartResponse
  /**
   * Updates only existing products in a Cart.
   * Returns an error if prompted to update non-existing product.
   */
  updateCartItems: CartResponse
  updateCartSelectedShippingOptions: CartResponse
}

/** Mutations to perform actions with Rye's API */
export type MutationAddCartItemsArgs = {
  input: CartItemsAddInput
}

/** Mutations to perform actions with Rye's API */
export type MutationCancelOrderArgs = {
  input: CancelOrderInput
}

/** Mutations to perform actions with Rye's API */
export type MutationCreateCartArgs = {
  input: CartCreateInput
}

/** Mutations to perform actions with Rye's API */
export type MutationDeleteCartItemsArgs = {
  input: CartItemsDeleteInput
}

/** Mutations to perform actions with Rye's API */
export type MutationProposeShopifyMerchantCommissionArgs = {
  input: ProposeShopifyMerchantCommissionInput
}

/** Mutations to perform actions with Rye's API */
export type MutationRemoveCartArgs = {
  input: CartDeleteInput
}

/** Mutations to perform actions with Rye's API */
export type MutationRequestProductByUrlArgs = {
  input: RequestProductByUrlInput
}

/** Mutations to perform actions with Rye's API */
export type MutationRequestStoreByUrlArgs = {
  input: RequestStoreByUrlInput
}

/** Mutations to perform actions with Rye's API */
export type MutationSubmitCartArgs = {
  input: CartSubmitInput
}

/** Mutations to perform actions with Rye's API */
export type MutationUpdateCartBuyerIdentityArgs = {
  input: CartBuyerIdentityUpdateInput
}

/** Mutations to perform actions with Rye's API */
export type MutationUpdateCartItemsArgs = {
  input: CartItemsUpdateInput
}

/** Mutations to perform actions with Rye's API */
export type MutationUpdateCartSelectedShippingOptionsArgs = {
  input: UpdateCartSelectedShippingOptionsInput
}

export enum OfferErrorCode {
  /** The buyer identity is missing */
  BuyerIdentityMissing = 'BUYER_IDENTITY_MISSING',
  /** Provided buyer identity information is invalid */
  InvalidBuyerIdentityInformation = 'INVALID_BUYER_IDENTITY_INFORMATION',
  /** The offer was not found */
  NotFound = 'NOT_FOUND',
  /** The list of products is empty */
  ProductsEmpty = 'PRODUCTS_EMPTY',
  /** The province is required for the provided country */
  ProvinceRequiredForProvidedCountry = 'PROVINCE_REQUIRED_FOR_PROVIDED_COUNTRY',
  /** The selected shipping option was not found */
  SelectedShippingOptionNotFound = 'SELECTED_SHIPPING_OPTION_NOT_FOUND',
  /** An unknown error occurred with the offer */
  UnknownOfferError = 'UNKNOWN_OFFER_ERROR',
}

export type OffsetPaginationInput = {
  limit?: Scalars['Int']['input']
  offset?: Scalars['Int']['input']
}

export type Order = {
  __typename?: 'Order'
  /** The list of events associated with the order */
  events: Array<OrderEvent>
  /** The unique identifier of the order */
  id: Scalars['ID']['output']
  /** Marketplace that order originated from */
  marketplace: Marketplace
  /** The list of marketplace order IDs associated with the order */
  marketplaceOrderIds: Array<Scalars['String']['output']>
  /** Required action that developer needs to perform on the order */
  requiredActions: Array<OrderRequiredAction>
  /** The list of shipments associated with the order */
  shipments: Array<OrderShipment>
  /** The status of the order */
  status: OrderStatus
}

export type OrderCancelFailedOrderEvent = OrderEvent & {
  __typename?: 'OrderCancelFailedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
  /** The reason for the order failure */
  reason: Scalars['String']['output']
}

export type OrderCancelStartedOrderEvent = OrderEvent & {
  __typename?: 'OrderCancelStartedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type OrderCancelSucceededOrderEvent = OrderEvent & {
  __typename?: 'OrderCancelSucceededOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type OrderEvent = {
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type OrderFailedOrderEvent = OrderEvent & {
  __typename?: 'OrderFailedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
  /** The reason for the order failure */
  reason: Scalars['String']['output']
}

export type OrderInput = {
  /** Order ID */
  paymentIntentID: Scalars['ID']['input']
}

export type OrderPlacedOrderEvent = OrderEvent & {
  __typename?: 'OrderPlacedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type OrderRequiredAction = CompletePaymentChallenge

export type OrderResponse = {
  __typename?: 'OrderResponse'
  /** Order ID */
  id: Scalars['ID']['output']
  /** The states associated with the order */
  states: Array<OrderState>
}

export type OrderShipment = {
  __typename?: 'OrderShipment'
  carrierName: Scalars['String']['output']
  carrierTrackingNumber: Scalars['String']['output']
  carrierTrackingUrl?: Maybe<Scalars['URL']['output']>
}

export type OrderState = {
  __typename?: 'OrderState'
  /** The timestamp when the order state was created */
  createdAt: Scalars['Time']['output']
  /** The ID of the order state */
  id: Scalars['ID']['output']
  /** The state of the order */
  state: OrderStateEnum
}

/** The `OrderStateEnum` enum defines the various states an order payment can be in. */
export enum OrderStateEnum {
  OrderCancelFailed = 'ORDER_CANCEL_FAILED',
  OrderCancelStarted = 'ORDER_CANCEL_STARTED',
  OrderCancelSucceeded = 'ORDER_CANCEL_SUCCEEDED',
  /** The order placement has failed. */
  OrderFailed = 'ORDER_FAILED',
  /** The order has been placed. */
  OrderPlaced = 'ORDER_PLACED',
  /** The submission of the order has started. */
  OrderSubmissionStarted = 'ORDER_SUBMISSION_STARTED',
  /** The submission of the order has been successful. */
  OrderSubmissionSucceeded = 'ORDER_SUBMISSION_SUCCEEDED',
  /** The payment for the order has failed. */
  PaymentFailed = 'PAYMENT_FAILED',
  /** The payment for the order has been refunded. */
  PaymentRefunded = 'PAYMENT_REFUNDED',
  /** The payment for the order has been successful. */
  PaymentSucceeded = 'PAYMENT_SUCCEEDED',
  /** The tracking information for the order has been obtained. */
  TrackingObtained = 'TRACKING_OBTAINED',
}

/** The `OrderStatus` enum defines the various states an order can be in. */
export enum OrderStatus {
  /** The order requires further action to be processed. */
  ActionRequired = 'ACTION_REQUIRED',
  /** The cancellation of the order is in progress. */
  CancellationInProgress = 'CANCELLATION_IN_PROGRESS',
  /** The cancellation of the order has been requested. */
  CancellationRequested = 'CANCELLATION_REQUESTED',
  /** The order has been cancelled. */
  Cancelled = 'CANCELLED',
  /** The order processing has failed. */
  Failed = 'FAILED',
  /** The order has been partially cancelled. */
  PartiallyCancelled = 'PARTIALLY_CANCELLED',
  /** The order has been created but not yet processed. */
  Pending = 'PENDING',
  /** The order is currently being processed. */
  Processing = 'PROCESSING',
  /** The order processing has been successfully completed. */
  Succeeded = 'SUCCEEDED',
}

export type OrderSubmissionStartedOrderEvent = OrderEvent & {
  __typename?: 'OrderSubmissionStartedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type OrderSubmissionSucceededOrderEvent = OrderEvent & {
  __typename?: 'OrderSubmissionSucceededOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  /** String representing pointer to the last element in the list. */
  endCursor?: Maybe<Scalars['ID']['output']>
  /** Defines whether there are elements after the last element in the list or not. */
  hasNextPage: Scalars['Boolean']['output']
  /** Defines whether there are elements before the first element in the list or not. */
  hasPreviousPage: Scalars['Boolean']['output']
  /** String representing pointer to the first element in the list. */
  startCursor?: Maybe<Scalars['ID']['output']>
}

export type PaymentFailedOrderEvent = OrderEvent & {
  __typename?: 'PaymentFailedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type PaymentRefundedOrderEvent = OrderEvent & {
  __typename?: 'PaymentRefundedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type PaymentSucceededOrderEvent = OrderEvent & {
  __typename?: 'PaymentSucceededOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

/** Price contains all the data necessary to calculate and display cost of a product */
export type Price = {
  __typename?: 'Price'
  /** The currency this product is priced in */
  currency: Currency
  /** Price formatted for display */
  displayValue: Scalars['String']['output']
  /** The amount of money this product costs. For USD a multiplied by 100 to avoid floating point errors */
  value: Scalars['Int']['output']
}

/** Common Product interface implemented across different marketplace products */
export type Product = {
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  images: Array<Image>
  isAvailable: Scalars['Boolean']['output']
  marketplace: Marketplace
  price?: Maybe<Price>
  tags: Array<Scalars['String']['output']>
  title: Scalars['String']['output']
  url: Scalars['URL']['output']
  variants: Array<Variant>
  vendor: Scalars['String']['output']
}

export type ProductByIdInput = {
  id: Scalars['ID']['input']
  marketplace: Marketplace
}

export enum ProductCollectionSortKeys {
  BestSelling = 'BEST_SELLING',
  CollectionDefault = 'COLLECTION_DEFAULT',
  Created = 'CREATED',
  Id = 'ID',
  Manual = 'MANUAL',
  Price = 'PRICE',
  Relevance = 'RELEVANCE',
  Title = 'TITLE',
}

/** Usually extra customizations for a product. You can find options in variant's fields option1, option2, option3 */
export type ProductOption = {
  __typename?: 'ProductOption'
  /** Name of the option */
  name: Scalars['String']['output']
  /** Option position (1, 2, 3) */
  position: Scalars['Int']['output']
  /** Possible values for the position */
  values?: Maybe<Array<Scalars['String']['output']>>
}

export type ProposeShopifyMerchantCommissionInput = {
  /** Shopify merchant store domain */
  canonicalDomain: Scalars['String']['input']
  /** Proposal rate percent */
  ratePercent: Scalars['Int']['input']
}

/** Query operations to look up data within Rye's API */
export type Query = {
  __typename?: 'Query'
  /** Retrieves a checkout based on the provided cart ID */
  checkoutByCartID?: Maybe<Checkout>
  /** Returns environment token used by RyePay */
  environmentToken: EnvironmentTokenResponse
  /** Returns a Cart by ID */
  getCart: CartResponse
  /** Returns information about integrated Shopify store */
  integratedShopifyStore?: Maybe<IntegratedShopifyStore>
  /**
   * Returns an order by payment intent ID
   * @deprecated This endpoint is deprecated due to obsolete response. Use 'orderByID' instead.
   */
  order: OrderResponse
  /** Retrieves an order based on the provided request ID */
  orderByID?: Maybe<Order>
  /** Get a single product by ID */
  productByID?: Maybe<Product>
  /** Get a list of paginated products by the store's domain name */
  productsByDomainV2: Array<Product>
  /** Returns information about the Rye's Shopify App */
  shopifyApp: ShopifyApp
  /** Returns information about Shopify Collection */
  shopifyCollection?: Maybe<ShopifyCollection>
}

/** Query operations to look up data within Rye's API */
export type QueryCheckoutByCartIdArgs = {
  cartID: Scalars['ID']['input']
}

/** Query operations to look up data within Rye's API */
export type QueryGetCartArgs = {
  id: Scalars['ID']['input']
}

/** Query operations to look up data within Rye's API */
export type QueryIntegratedShopifyStoreArgs = {
  canonicalDomain: Scalars['String']['input']
}

/** Query operations to look up data within Rye's API */
export type QueryOrderArgs = {
  input: OrderInput
}

/** Query operations to look up data within Rye's API */
export type QueryOrderByIdArgs = {
  id: Scalars['ID']['input']
}

/** Query operations to look up data within Rye's API */
export type QueryProductByIdArgs = {
  input: ProductByIdInput
}

/** Query operations to look up data within Rye's API */
export type QueryProductsByDomainV2Args = {
  input: ProductsByDomainInput
  pagination: OffsetPaginationInput
}

/** Query operations to look up data within Rye's API */
export type QueryShopifyCollectionArgs = {
  id: Scalars['String']['input']
}

export type RequestProductByUrlInput = {
  marketplace: Marketplace
  url: Scalars['URL']['input']
}

export type RequestProductResponse = {
  __typename?: 'RequestProductResponse'
  productID: Scalars['ID']['output']
}

export type RequestStoreByUrlInput = {
  url: Scalars['URL']['input']
}

export type RequestStoreResponse = {
  __typename?: 'RequestStoreResponse'
  requestID: Scalars['ID']['output']
}

export type SelectedShippingOption = {
  /** ID of the selected shipping option */
  shippingId: Scalars['String']['input']
  /** Name of the store */
  store: Scalars['String']['input']
}

export type ShippingMethod = {
  __typename?: 'ShippingMethod'
  /** The ID of the shipping method */
  id: Scalars['ID']['output']
  /** The label or name of the shipping method */
  label: Scalars['String']['output']
  /** The price of the products */
  price?: Maybe<Price>
  /** The taxes associated with the products */
  taxes?: Maybe<Price>
  /** The total cost of the products (including price and taxes) */
  total?: Maybe<Price>
}

export type ShopifyApp = {
  __typename?: 'ShopifyApp'
  installationLink: ShopifyAppInstallationLink
}

export type ShopifyAppInstallationLinkArgs = {
  storeCanonicalDomain: Scalars['String']['input']
}

export type ShopifyAppInstallationLink = {
  __typename?: 'ShopifyAppInstallationLink'
  url: Scalars['URL']['output']
}

export type ShopifyCartItemsInput = {
  /** Number of products */
  quantity: Scalars['Int']['input']
  /** Shopify product variant ID */
  variantId: Scalars['ID']['input']
}

export type ShopifyCartLine = {
  __typename?: 'ShopifyCartLine'
  /** Number of products */
  quantity: Scalars['Int']['output']
  /** Shopify variant full data, missing fields taken from product */
  variant: ShopifyVariant
}

export type ShopifyCollection = {
  __typename?: 'ShopifyCollection'
  /** Collection description */
  description: Scalars['String']['output']
  /** Collection id */
  id: Scalars['ID']['output']
  /** Products in this collection */
  productsConnection: ShopifyProductsConnection
  /** Collection title */
  title: Scalars['String']['output']
}

export type ShopifyCollectionProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

export type ShopifyCollectionEdge = {
  __typename?: 'ShopifyCollectionEdge'
  cursor: Scalars['ID']['output']
  node: ShopifyCollection
}

export type ShopifyCollectionsConnection = {
  __typename?: 'ShopifyCollectionsConnection'
  edges: Array<ShopifyCollectionEdge>
  pageInfo: PageInfo
}

/** Image of a Shopify product */
export type ShopifyImage = Image & {
  __typename?: 'ShopifyImage'
  /**
   * Image created at date
   * @deprecated No longer supported
   */
  createdAt: Scalars['Time']['output']
  /** Height of the image in pixels. */
  height: Scalars['Int']['output']
  /** Shopify Image ID */
  id: Scalars['ID']['output']
  /** Order of the image in a carousel of images. */
  position: Scalars['Int']['output']
  /**
   * Image updated at date
   * @deprecated No longer supported
   */
  updatedAt: Scalars['Time']['output']
  /** The original source URL of the image. */
  url: Scalars['URL']['output']
  /** Image variant IDs */
  variantIDs: Array<Scalars['ID']['output']>
  /** Width of the image in pixels. */
  width: Scalars['Int']['output']
}

export type ShopifyMerchantCommission = {
  __typename?: 'ShopifyMerchantCommission'
  /** Active commission proposal made be the user, if exists. */
  commissionProposal?: Maybe<ShopifyMerchantCommissionProposal>
  /** Rate percent currently set for the user */
  currentRatePercent: Scalars['Int']['output']
}

export type ShopifyMerchantCommissionProposal = {
  __typename?: 'ShopifyMerchantCommissionProposal'
  /** When proposal was made */
  createdAt: Scalars['Time']['output']
  /** Proposal rate percent */
  ratePercent: Scalars['Int']['output']
}

export type ShopifyOffer = {
  __typename?: 'ShopifyOffer'
  /** Offer errors */
  errors: Array<ShopifyOfferError>
  /** The margin of the product */
  margin?: Maybe<Price>
  /** List of the non-available products for purchase */
  notAvailableIds: Array<Scalars['String']['output']>
  /** Shipping method selected by customer */
  selectedShippingMethod?: Maybe<ShippingMethod>
  /** List of shipping methods with label and calculated prices */
  shippingMethods: Array<ShippingMethod>
  /** The subtotal of the product */
  subtotal?: Maybe<Price>
}

export type ShopifyOfferError = {
  __typename?: 'ShopifyOfferError'
  /** The error code associated with the offer error */
  code: OfferErrorCode
  /** Additional details about the offer error */
  details?: Maybe<ShopifyOfferErrorDetails>
  /** A human-readable error message */
  message: Scalars['String']['output']
}

export type ShopifyOfferErrorDetails = {
  __typename?: 'ShopifyOfferErrorDetails'
  /** The variant IDs associated with the offer error from the metadata of the order */
  variantIds?: Maybe<Array<Scalars['String']['output']>>
}

/** A Product from the Shopify store */
export type ShopifyProduct = Product & {
  __typename?: 'ShopifyProduct'
  /** Collection handle for the product. Used to group products together */
  collectionHandle: Scalars['String']['output']
  /** Product created at date */
  createdAt: Scalars['Time']['output']
  /** Description of the product. Scraped and extracted from the HTML of the product page */
  description: Scalars['String']['output']
  /** Raw HTML of the product page */
  descriptionHTML: Scalars['String']['output']
  /** Unique handle for the product */
  handle: Scalars['String']['output']
  /** Shopify Product ID. Usually an integer */
  id: Scalars['ID']['output']
  /** List of images of the product */
  images: Array<Image>
  /** Flag to indicate whether any of the variants are available */
  isAvailable: Scalars['Boolean']['output']
  /** Shopify */
  marketplace: Marketplace
  /** Max price across the product variants */
  maxPrice: Scalars['Int']['output']
  /** Min price for across the product variants */
  minPrice: Scalars['Int']['output']
  /** Usually extra customizations for a product. You can find options in variant's fields option1, option2, option3 */
  options?: Maybe<Array<ProductOption>>
  /** Price of the product */
  price?: Maybe<Price>
  /** Product type */
  productType: Scalars['String']['output']
  /** Product published at date */
  publishedAt: Scalars['Time']['output']
  /** Product reviews */
  reviewsConnection?: Maybe<ShopifyProductReviewsConnection>
  /** Store URL */
  storeCanonicalURL: Scalars['URL']['output']
  /** Domain name part of the store canonical URL, e.g. abc.myshopify.com */
  storeDomain: Scalars['String']['output']
  /** Additional tags associated with the product */
  tags: Array<Scalars['String']['output']>
  /** Title of the product */
  title: Scalars['String']['output']
  /** URL to the product page */
  url: Scalars['URL']['output']
  /** Variants of the product available. Usually different sizes or colors */
  variants: Array<Variant>
  /** Vendor of the product */
  vendor: Scalars['String']['output']
}

/** A Product from the Shopify store */
export type ShopifyProductReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
}

export type ShopifyProductEdge = {
  __typename?: 'ShopifyProductEdge'
  cursor: Scalars['ID']['output']
  node: ShopifyProduct
}

export type ShopifyProductReview = {
  __typename?: 'ShopifyProductReview'
  /** Review body (message) */
  body?: Maybe<Scalars['String']['output']>
  /** How many people found this review helpful */
  helpfulnessCount: Scalars['Int']['output']
  /** Review id */
  id: Scalars['ID']['output']
  /** Reply from merchant (if it exists) */
  merchantReply?: Maybe<Scalars['String']['output']>
  /** Rating from 1 to 5 */
  rating: Scalars['Int']['output']
  /** Display name of the reviewer */
  reviewerDisplayName?: Maybe<Scalars['String']['output']>
  /** Date and Time when the review was submitted */
  submittedAt: Scalars['Time']['output']
}

export type ShopifyProductReviewEdge = {
  __typename?: 'ShopifyProductReviewEdge'
  cursor: Scalars['ID']['output']
  node: ShopifyProductReview
}

export type ShopifyProductReviewsConnection = {
  __typename?: 'ShopifyProductReviewsConnection'
  edges: Array<ShopifyProductReviewEdge>
  pageInfo: PageInfo
}

export type ShopifyProductsConnection = {
  __typename?: 'ShopifyProductsConnection'
  edges: Array<ShopifyProductEdge>
  pageInfo: PageInfo
}

export type ShopifyStore = {
  __typename?: 'ShopifyStore'
  /** List of Shopify products to purchase */
  cartLines: Array<ShopifyCartLine>
  /** Contains errors related to a specific store */
  errors: Array<ShopifyStoreError>
  /** Indicates whether the store contains digital products only. When `true` means that the store contains only digital products, when `false` means that the store contains at least one physical product. */
  isShippingRequired: Scalars['Boolean']['output']
  /** True if the store items ended up with a successful checkout */
  isSubmitted: Scalars['Boolean']['output']
  /** Information about taxes, prices and shipping methods */
  offer?: Maybe<ShopifyOffer>
  /** A unique identifier which will be used for getting information about the order after the cart is submitted */
  requestId: Scalars['String']['output']
  /** Countries that the store ships to. */
  shipsToCountries?: Maybe<Array<Country>>
  /** Shopify store name */
  store: Scalars['String']['output']
}

export type ShopifyStoreError = {
  __typename?: 'ShopifyStoreError'
  /** Error code */
  code: StoreErrorCode
  /** Additional error information */
  details?: Maybe<ShopifyStoreErrorDetails>
  /** Error message related to the Store */
  message: Scalars['String']['output']
}

export type ShopifyStoreErrorDetails = {
  __typename?: 'ShopifyStoreErrorDetails'
  variantIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>
}

/** Variant of a single Shopify product. Note only a variant can be checked out, not the main product */
export type ShopifyVariant = Variant & {
  __typename?: 'ShopifyVariant'
  /** Product SKU of the variant */
  SKU: Scalars['String']['output']
  /** Original price of the variant. Can be used to show the current price at a discount against this price */
  compareAtPrice: Scalars['String']['output']
  /** Shopify Product Variant ID. You must use this in the createShopifyPaymentIntent mutation */
  id: Scalars['ID']['output']
  /** Image of a Shopify product variant */
  image: Image
  /** Whether this variant is available in stock */
  isAvailable: Scalars['Boolean']['output']
  /** Whether this product can be shipped, can be used to distinguish between a digital delivery */
  isShippingRequired: Scalars['Boolean']['output']
  /** Whether taxes can be applied to this product */
  isTaxable: Scalars['Boolean']['output']
  /** Product variant name. Usually a combination of the product name and variant title */
  name: Scalars['String']['output']
  /**
   * First additional options available for this product. Usually extra customizations for a product.
   * Example 'Shower Filter' options:
   * option1: 'With Shower Head'
   * option2: 'Without Shower Head'
   * option3: null
   */
  option1?: Maybe<Scalars['String']['output']>
  /**
   * Second additional options available for this product. Usually extra customizations for a product.
   * Example 'Shower Filter' options:
   * option1: 'With Shower Head'
   * option2: 'Without Shower Head'
   * option3: null
   */
  option2?: Maybe<Scalars['String']['output']>
  /**
   * Third additional options available for this product. Usually extra customizations for a product.
   * Example 'Shower Filter' options:
   * option1: 'With Shower Head'
   * option2: 'Without Shower Head'
   * option3: null
   */
  option3?: Maybe<Scalars['String']['output']>
  /** Current price of the product */
  price: Scalars['String']['output']
  /** Current price of the product in cents */
  priceCents: Scalars['Int']['output']
  /** Quantity of inventory available for this variant. Will only be populated for integrated Shopify product variants */
  quantityAvailable?: Maybe<Scalars['Int']['output']>
  /** Title of a Shopify product variant */
  title: Scalars['String']['output']
  /** Weight of the product in grams */
  weight: Scalars['Int']['output']
}

export type ShopifyVariantIdInput = {
  /** ID of the Shopify product variant */
  variantId: Scalars['ID']['input']
}

export type Store = AmazonStore | ShopifyStore

export enum StoreErrorCode {
  /** Adding products to the store has failed. */
  AddProductsFailed = 'ADD_PRODUCTS_FAILED',
  /** The checkout process is disallowed for the store. */
  CheckoutDisallowed = 'CHECKOUT_DISALLOWED',
  /** A product is no longer available */
  ProductNotAvailable = 'PRODUCT_NOT_AVAILABLE',
  /** The quantity of a product exceeds the available stock in the store. */
  QuantityExceeded = 'QUANTITY_EXCEEDED',
  /** Removing products from the store has failed. */
  RemoveProductsFailed = 'REMOVE_PRODUCTS_FAILED',
  /** For Shopify stores - the store's Shopify API is temporarily unavailable for a reason outside Rye's control */
  ShopifyServiceTemporarilyUnavailable = 'SHOPIFY_SERVICE_TEMPORARILY_UNAVAILABLE',
  /** Modification of the store is forbidden. */
  StoreModificationForbidden = 'STORE_MODIFICATION_FORBIDDEN',
  /** Updating products in the store has failed. */
  UpdateProductsFailed = 'UPDATE_PRODUCTS_FAILED',
}

export type StorePromoCodesInput = {
  /** List of promo codes to apply for a store */
  promoCodes: Array<Scalars['String']['input']>
  /** Store canonical domain */
  store: Scalars['String']['input']
}

export type SubmitCartData = {
  __typename?: 'SubmitCartData'
  /** Cart ID */
  id: Scalars['ID']['output']
  /** Submission status for each store */
  stores: Array<SubmitStoreResult>
}

export type SubmitCartResult = {
  __typename?: 'SubmitCartResult'
  /** Cart submit data */
  cart: SubmitCartData
  /** Cart submit errors */
  errors: Array<SubmitCartResultError>
}

export type SubmitCartResultError = {
  __typename?: 'SubmitCartResultError'
  /** Error code for a specific operation */
  code: SubmitCartResultErrorCode
  /** Additional error information */
  details?: Maybe<CartErrorDetails>
  /** Error message */
  message: Scalars['String']['output']
}

export enum SubmitCartResultErrorCode {
  /** The cart has already been submitted and cannot be submitted again. */
  AlreadySubmitted = 'ALREADY_SUBMITTED',
  /** The billing address is ambiguous and cannot be verified. */
  BillingAddressAmbiguous = 'BILLING_ADDRESS_AMBIGUOUS',
  /** The address in the billing address is invalid. */
  BillingAddressInvalidAddress = 'BILLING_ADDRESS_INVALID_ADDRESS',
  /** The city in the billing address is invalid. */
  BillingAddressInvalidCity = 'BILLING_ADDRESS_INVALID_CITY',
  /** The country in the billing address is invalid. */
  BillingAddressInvalidCountry = 'BILLING_ADDRESS_INVALID_COUNTRY',
  /** The first name in the billing address is invalid. */
  BillingAddressInvalidFirstName = 'BILLING_ADDRESS_INVALID_FIRST_NAME',
  /** The last name in the billing address is invalid. */
  BillingAddressInvalidLastName = 'BILLING_ADDRESS_INVALID_LAST_NAME',
  /** The phone number in the billing address is invalid. */
  BillingAddressInvalidPhone = 'BILLING_ADDRESS_INVALID_PHONE',
  /** The postal code in the billing address is invalid. */
  BillingAddressInvalidPostalCode = 'BILLING_ADDRESS_INVALID_POSTAL_CODE',
  /** The province in the billing address is invalid. */
  BillingAddressInvalidProvince = 'BILLING_ADDRESS_INVALID_PROVINCE',
  /** The shipping address is ambiguous and cannot be verified. */
  BuyerIdentityAddressAmbiguous = 'BUYER_IDENTITY_ADDRESS_AMBIGUOUS',
  /** The address in the buyer identity is invalid. */
  BuyerIdentityInvalidAddress = 'BUYER_IDENTITY_INVALID_ADDRESS',
  /** The city in the buyer identity is invalid. */
  BuyerIdentityInvalidCity = 'BUYER_IDENTITY_INVALID_CITY',
  /** The country in the buyer identity is invalid. */
  BuyerIdentityInvalidCountry = 'BUYER_IDENTITY_INVALID_COUNTRY',
  /** The email in the buyer identity is invalid. */
  BuyerIdentityInvalidEmail = 'BUYER_IDENTITY_INVALID_EMAIL',
  /** The first name in the buyer identity is invalid. */
  BuyerIdentityInvalidFirstName = 'BUYER_IDENTITY_INVALID_FIRST_NAME',
  /** The last name in the buyer identity is invalid. */
  BuyerIdentityInvalidLastName = 'BUYER_IDENTITY_INVALID_LAST_NAME',
  /** The phone number in the buyer identity is invalid. */
  BuyerIdentityInvalidPhone = 'BUYER_IDENTITY_INVALID_PHONE',
  /** The postal code in the buyer identity is invalid. */
  BuyerIdentityInvalidPostalCode = 'BUYER_IDENTITY_INVALID_POSTAL_CODE',
  /** The province in the buyer identity is invalid. */
  BuyerIdentityInvalidProvince = 'BUYER_IDENTITY_INVALID_PROVINCE',
  /** The buyer identity is missing. */
  BuyerIdentityMissing = 'BUYER_IDENTITY_MISSING',
  /** The cart either has no stores or stores have no items */
  CartIsEmpty = 'CART_IS_EMPTY',
  /** Failed to create the Spreedly environment for payment. */
  CreateSpreedlyEnvironmentFailed = 'CREATE_SPREEDLY_ENVIRONMENT_FAILED',
  /** The submission of the cart failed. */
  SubmitCartFailed = 'SUBMIT_CART_FAILED',
}

export type SubmitStoreResult = {
  __typename?: 'SubmitStoreResult'
  /** Store submit errors */
  errors: Array<SubmitStoreResultError>
  /** True if the store items ended up with a successful checkout */
  isSubmitted: Scalars['Boolean']['output']
  /** Request ID got from checkout */
  requestId: Scalars['ID']['output']
  /**
   * Status of the checkout
   * @deprecated deprecating in favor of using isSubmitted and the submittedCart endpoint for event info.
   */
  status?: Maybe<SubmitStoreStatus>
  /** One of the store names from the collection */
  store: Store
}

export type SubmitStoreResultError = {
  __typename?: 'SubmitStoreResultError'
  /** Error code for a specific operation */
  code: SubmitStoreResultErrorCode
  /** Error message */
  message: Scalars['String']['output']
}

export enum SubmitStoreResultErrorCode {
  /** The store has already been submitted and cannot be submitted again. */
  AlreadySubmitted = 'ALREADY_SUBMITTED',
  /** The payment for the store submission failed. */
  PaymentFailed = 'PAYMENT_FAILED',
  /** The submission of the store failed. */
  SubmitStoreFailed = 'SUBMIT_STORE_FAILED',
}

export enum SubmitStoreStatus {
  /** The store submission was completed successfully */
  Completed = 'COMPLETED',
  /** The store submission failed for some other reason */
  Failed = 'FAILED',
  /** The payment for the store submission failed */
  PaymentFailed = 'PAYMENT_FAILED',
}

export type TrackingObtainedOrderEvent = OrderEvent & {
  __typename?: 'TrackingObtainedOrderEvent'
  /** The timestamp when the event was created */
  createdAt: Scalars['Time']['output']
  /** The unique identifier of the event */
  id: Scalars['ID']['output']
}

export type UpdateCartSelectedShippingOptionsInput = {
  /** ID of the cart to update */
  id: Scalars['ID']['input']
  /** Selected shipping options for the cart */
  shippingOptions: Array<SelectedShippingOption>
}

/** Common Variant interface implemented across different marketplace products */
export type Variant = {
  image: Image
  title: Scalars['String']['output']
}

export type ProductsByDomainInput = {
  /** Domain name of the store. E.g. if a store's canonical URL is https://abc.myshopify.com, the domain is abc.myshopify.com, all lowercased. */
  domain: Scalars['String']['input']
}

export type BuyerIdentityFragment = {
  __typename?: 'Cart'
  buyerIdentity?: {
    __typename?: 'BuyerIdentity'
    firstName?: string | null
    lastName?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    provinceCode?: string | null
    countryCode: Country
    postalCode?: string | null
    email?: string | null
    phone?: string | null
  } | null
} & { ' $fragmentName'?: 'BuyerIdentityFragment' }

export type AmazonShippingMethodsFragment = {
  __typename?: 'AmazonOffer'
  shippingMethods: Array<{
    __typename?: 'ShippingMethod'
    id: string
    label: string
    price?: {
      __typename?: 'Price'
      value: number
      displayValue: string
      currency: Currency
    } | null
    taxes?: {
      __typename?: 'Price'
      value: number
      displayValue: string
      currency: Currency
    } | null
    total?: {
      __typename?: 'Price'
      value: number
      displayValue: string
      currency: Currency
    } | null
  }>
} & { ' $fragmentName'?: 'AmazonShippingMethodsFragment' }

export type ShopifyShippingMethodsFragment = {
  __typename?: 'ShopifyOffer'
  shippingMethods: Array<{
    __typename?: 'ShippingMethod'
    id: string
    label: string
    price?: {
      __typename?: 'Price'
      value: number
      displayValue: string
      currency: Currency
    } | null
    taxes?: {
      __typename?: 'Price'
      value: number
      displayValue: string
      currency: Currency
    } | null
    total?: {
      __typename?: 'Price'
      value: number
      displayValue: string
      currency: Currency
    } | null
  }>
} & { ' $fragmentName'?: 'ShopifyShippingMethodsFragment' }

export type AmazonOfferFragment = {
  __typename?: 'AmazonStore'
  offer?:
    | ({
        __typename?: 'AmazonOffer'
        notAvailableIds: Array<string>
        errors: Array<{
          __typename?: 'AmazonOfferError'
          code: OfferErrorCode
          message: string
          details?: {
            __typename?: 'AmazonOfferErrorDetails'
            productIds?: Array<string> | null
          } | null
        }>
        subtotal?: {
          __typename?: 'Price'
          value: number
          displayValue: string
          currency: Currency
        } | null
        margin?: {
          __typename?: 'Price'
          value: number
          displayValue: string
          currency: Currency
        } | null
      } & {
        ' $fragmentRefs'?: {
          AmazonShippingMethodsFragment: AmazonShippingMethodsFragment
        }
      })
    | null
} & { ' $fragmentName'?: 'AmazonOfferFragment' }

export type ShopifyOfferFragment = {
  __typename?: 'ShopifyStore'
  offer?:
    | ({
        __typename?: 'ShopifyOffer'
        notAvailableIds: Array<string>
        errors: Array<{
          __typename?: 'ShopifyOfferError'
          code: OfferErrorCode
          message: string
          details?: {
            __typename?: 'ShopifyOfferErrorDetails'
            variantIds?: Array<string> | null
          } | null
        }>
        subtotal?: {
          __typename?: 'Price'
          value: number
          displayValue: string
          currency: Currency
        } | null
        margin?: {
          __typename?: 'Price'
          value: number
          displayValue: string
          currency: Currency
        } | null
      } & {
        ' $fragmentRefs'?: {
          ShopifyShippingMethodsFragment: ShopifyShippingMethodsFragment
        }
      })
    | null
} & { ' $fragmentName'?: 'ShopifyOfferFragment' }

export type AmazonCartLinesFragment = {
  __typename?: 'AmazonStore'
  cartLines: Array<{
    __typename?: 'AmazonCartLine'
    quantity: number
    product: {
      __typename?: 'AmazonProduct'
      title: string
      url: any
      vendor: string
      id: string
      description: string
      isAvailable: boolean
      images: Array<
        | { __typename?: 'AmazonImage'; url: any }
        | { __typename?: 'ShopifyImage'; url: any }
      >
      price?: {
        __typename?: 'Price'
        displayValue: string
        currency: Currency
        value: number
      } | null
    }
  }>
} & { ' $fragmentName'?: 'AmazonCartLinesFragment' }

export type ShopifyCartLinesFragment = {
  __typename?: 'ShopifyStore'
  cartLines: Array<{
    __typename?: 'ShopifyCartLine'
    quantity: number
    variant: {
      __typename?: 'ShopifyVariant'
      title: string
      name: string
      price: string
      isAvailable: boolean
      image:
        | { __typename?: 'AmazonImage'; url: any }
        | { __typename?: 'ShopifyImage'; url: any }
    }
  }>
} & { ' $fragmentName'?: 'ShopifyCartLinesFragment' }

export type GetCartQueryVariables = Exact<{
  id: Scalars['ID']['input']
  fetchBuyerIdentity?: InputMaybe<Scalars['Boolean']['input']>
  fetchShippingMethods?: InputMaybe<Scalars['Boolean']['input']>
  fetchOffer?: InputMaybe<Scalars['Boolean']['input']>
  fetchCartLines?: InputMaybe<Scalars['Boolean']['input']>
}>

export type GetCartQuery = {
  __typename?: 'Query'
  getCart: {
    __typename?: 'CartResponse'
    cart: {
      __typename?: 'Cart'
      id: string
      stores: Array<
        | ({
            __typename?: 'AmazonStore'
            isSubmitted: boolean
            requestId: string
            store: string
            isShippingRequired: boolean
            errors: Array<{
              __typename?: 'AmazonStoreError'
              code: StoreErrorCode
              message: string
              details?: {
                __typename?: 'AmazonStoreErrorDetails'
                productIds?: Array<string> | null
              } | null
            }>
            offer?:
              | ({ __typename?: 'AmazonOffer' } & {
                  ' $fragmentRefs'?: {
                    AmazonShippingMethodsFragment: AmazonShippingMethodsFragment
                  }
                })
              | null
          } & {
            ' $fragmentRefs'?: {
              AmazonCartLinesFragment: AmazonCartLinesFragment
              AmazonOfferFragment: AmazonOfferFragment
            }
          })
        | ({
            __typename?: 'ShopifyStore'
            store: string
            errors: Array<{
              __typename?: 'ShopifyStoreError'
              code: StoreErrorCode
              message: string
              details?: {
                __typename?: 'ShopifyStoreErrorDetails'
                variantIds?: Array<string | null> | null
              } | null
            }>
            offer?:
              | ({ __typename?: 'ShopifyOffer' } & {
                  ' $fragmentRefs'?: {
                    ShopifyShippingMethodsFragment: ShopifyShippingMethodsFragment
                  }
                })
              | null
          } & {
            ' $fragmentRefs'?: {
              ShopifyCartLinesFragment: ShopifyCartLinesFragment
              ShopifyOfferFragment: ShopifyOfferFragment
            }
          })
      >
    } & { ' $fragmentRefs'?: { BuyerIdentityFragment: BuyerIdentityFragment } }
    errors: Array<{
      __typename?: 'CartError'
      code: CartErrorCode
      message: string
    }>
  }
}

export const BuyerIdentityFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BuyerIdentity' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Cart' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'buyerIdentity' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address1' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address2' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'provinceCode' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BuyerIdentityFragment, unknown>
export const AmazonShippingMethodsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AmazonShippingMethods' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AmazonOffer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shippingMethods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'price' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'taxes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AmazonShippingMethodsFragment, unknown>
export const AmazonOfferFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AmazonOffer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AmazonStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'offer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'errors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'message' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'AmazonOfferErrorDetails',
                                },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productIds' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subtotal' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'margin' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'notAvailableIds' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AmazonShippingMethods' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AmazonShippingMethods' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AmazonOffer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shippingMethods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'price' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'taxes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AmazonOfferFragment, unknown>
export const ShopifyShippingMethodsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShopifyShippingMethods' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShopifyOffer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shippingMethods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'price' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'taxes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ShopifyShippingMethodsFragment, unknown>
export const ShopifyOfferFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShopifyOffer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShopifyStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'offer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'errors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'message' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'ShopifyOfferErrorDetails',
                                },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'variantIds' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subtotal' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'margin' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'notAvailableIds' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ShopifyShippingMethods' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShopifyShippingMethods' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShopifyOffer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shippingMethods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'price' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'taxes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ShopifyOfferFragment, unknown>
export const AmazonCartLinesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AmazonCartLines' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AmazonStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cartLines' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vendor' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'images' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'price' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'displayValue' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currency' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAvailable' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AmazonCartLinesFragment, unknown>
export const ShopifyCartLinesFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShopifyCartLines' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShopifyStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cartLines' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'variant' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ShopifyVariant' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAvailable' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ShopifyCartLinesFragment, unknown>
export const GetCartDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCart' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'fetchBuyerIdentity' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: true },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'fetchShippingMethods' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: true },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'fetchOffer' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: true },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'fetchCartLines' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: true },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCart' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cart' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BuyerIdentity' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: {
                                    kind: 'Name',
                                    value: 'fetchBuyerIdentity',
                                  },
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'AmazonStore' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isSubmitted',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'requestId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'errors' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'code' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'message',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'details',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'productIds',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'AmazonCartLines',
                                    },
                                    directives: [
                                      {
                                        kind: 'Directive',
                                        name: {
                                          kind: 'Name',
                                          value: 'include',
                                        },
                                        arguments: [
                                          {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'if' },
                                            value: {
                                              kind: 'Variable',
                                              name: {
                                                kind: 'Name',
                                                value: 'fetchCartLines',
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'isShippingRequired',
                                    },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'AmazonOffer',
                                    },
                                    directives: [
                                      {
                                        kind: 'Directive',
                                        name: {
                                          kind: 'Name',
                                          value: 'include',
                                        },
                                        arguments: [
                                          {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'if' },
                                            value: {
                                              kind: 'Variable',
                                              name: {
                                                kind: 'Name',
                                                value: 'fetchOffer',
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'offer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'AmazonShippingMethods',
                                          },
                                          directives: [
                                            {
                                              kind: 'Directive',
                                              name: {
                                                kind: 'Name',
                                                value: 'include',
                                              },
                                              arguments: [
                                                {
                                                  kind: 'Argument',
                                                  name: {
                                                    kind: 'Name',
                                                    value: 'if',
                                                  },
                                                  value: {
                                                    kind: 'Variable',
                                                    name: {
                                                      kind: 'Name',
                                                      value:
                                                        'fetchShippingMethods',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'ShopifyStore' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'errors' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'code' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'message',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'details',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'variantIds',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ShopifyCartLines',
                                    },
                                    directives: [
                                      {
                                        kind: 'Directive',
                                        name: {
                                          kind: 'Name',
                                          value: 'include',
                                        },
                                        arguments: [
                                          {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'if' },
                                            value: {
                                              kind: 'Variable',
                                              name: {
                                                kind: 'Name',
                                                value: 'fetchCartLines',
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'ShopifyOffer',
                                    },
                                    directives: [
                                      {
                                        kind: 'Directive',
                                        name: {
                                          kind: 'Name',
                                          value: 'include',
                                        },
                                        arguments: [
                                          {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'if' },
                                            value: {
                                              kind: 'Variable',
                                              name: {
                                                kind: 'Name',
                                                value: 'fetchOffer',
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'offer' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'FragmentSpread',
                                          name: {
                                            kind: 'Name',
                                            value: 'ShopifyShippingMethods',
                                          },
                                          directives: [
                                            {
                                              kind: 'Directive',
                                              name: {
                                                kind: 'Name',
                                                value: 'include',
                                              },
                                              arguments: [
                                                {
                                                  kind: 'Argument',
                                                  name: {
                                                    kind: 'Name',
                                                    value: 'if',
                                                  },
                                                  value: {
                                                    kind: 'Variable',
                                                    name: {
                                                      kind: 'Name',
                                                      value:
                                                        'fetchShippingMethods',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'errors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'message' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AmazonShippingMethods' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AmazonOffer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shippingMethods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'price' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'taxes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShopifyShippingMethods' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShopifyOffer' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shippingMethods' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'price' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'taxes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BuyerIdentity' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Cart' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'buyerIdentity' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address1' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address2' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'provinceCode' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'postalCode' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AmazonCartLines' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AmazonStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cartLines' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'product' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vendor' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'images' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'price' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'displayValue' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currency' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'value' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isAvailable' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AmazonOffer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'AmazonStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'offer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'errors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'message' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'AmazonOfferErrorDetails',
                                },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'productIds' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subtotal' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'margin' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'notAvailableIds' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'AmazonShippingMethods' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShopifyCartLines' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShopifyStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cartLines' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'variant' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ShopifyVariant' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'url' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isAvailable' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ShopifyOffer' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ShopifyStore' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'offer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'errors' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'message' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'details' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'ShopifyOfferErrorDetails',
                                },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'variantIds' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subtotal' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'margin' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'displayValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'notAvailableIds' },
                },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ShopifyShippingMethods' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCartQuery, GetCartQueryVariables>
