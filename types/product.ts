import type { IMoneyV2 } from '~/types/common-objects'
import type { TImage } from '~/types/types'

export interface IProductRating {
  description: string | null
  id: number
  productFeId: number
  productId: number
  score: number | null
  shopifyCustomerId: number
  shopifyStoreId: number
}

export interface IProductAward {
  id: string | number
  maxValue: string | number
  quote: string
  title: string
  value: string | number
  year: string | number
}

export type TProductFeatures =
  | 'favourite'
  | 'isnew'
  | 'inpromotion'
  | 'isInPromotion'
  | 'foreveryday'
  | 'togift'
  | 'unusualvariety'
  | 'rarewine'
  | 'artisanal'
  | 'organic'
  | 'topsale'

interface IProductSeo {
  description: string
  title: string
}

interface IProductImage {
  thumbnail: TImage
  source: TImage
}

export interface IProductBreadcrumbs {
  handle: string
  label: string
  to: string
}

export interface IBaseProductMapped {
  availableForSale: boolean
  id: string | number
  image: IProductImage
  shopify_product_id: string | number
  shopify_product_variant_id: string | number
  quantityAvailable: number
  title: string
}

export interface IProductMapped extends IBaseProductMapped {
  awards: IProductAward[]
  gtmProductData: any
  availableFeatures: TProductFeatures[]
  descriptionHtml: HTMLElement | string
  sku: string
  // awards: []
  // availableForSale: boolean
  // compareAtPrice: IMoneyV2
  // handle: []
  // shopify_product_id: string
  // shopify_product_variant_id: string
}

interface IGiftCardVariantMapped extends IBaseProductMapped {
  compareAtPrice: IMoneyV2
  price: IMoneyV2
}

export interface IGiftCardMapped extends IBaseProductMapped {
  breadcrumbs: IProductBreadcrumbs[]
  description: string
  href: string
  seo: IProductSeo
  variants: IGiftCardVariantMapped[]
}
// export interface TProductAward {
//   id: number
//   title: string
//   value: number
//   maxValue: number
//   year: number
//   quote: Record<string, any> // Todo: Locale
//   type: string
// }
