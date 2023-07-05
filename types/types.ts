import type { TranslateResult } from 'vue-i18n'

export type TSizes = 'xs' | 'sm' | 'md' | 'lg'
export type TPosition = 'left' | 'center' | 'right' | 'unset'
export type TButtonVariant = 'default' | 'default-inverse' | 'ghost' | 'ghost-inverse' | 'text'
export type TColors = 'primary' | 'secondary' | 'secondary-400'
export type TShapes = 'rounded' | 'pill'
export interface TImage {
  altText: string
  height: number
  id?: string
  url: string
  width: number
}

export interface IOptions {
  label: TranslateResult
  value: string
  icon?: string
}
