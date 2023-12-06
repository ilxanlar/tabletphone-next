export type AddonOptionType = {
  label: string,
  price: number
}

export type AddonType = {
  label: string,
  name: string,
  options: AddonOptionType[],
  type: 'type1' | 'type2' | 'type3'
}

export type AddonsType = {
  [key: string]: AddonType
}

type ProductType = {
  addons: AddonsType,
  altName: string,
  altSlug: string,
  categories: [],
  description: string,
  id: number,
  images: Array<{
    alt: string,
    name: string,
    src: string
  }>,
  name: string,
  permalink: string,
  price: string,
  priceHtml: string,
  regularPrice: string,
  reviewUrl: string,
  reviewUrlLabel: string,
  salePrice: string,
  shortDescription?: string,
  slug: string,
  specs?: string,
  tags: [],
}

export default ProductType
