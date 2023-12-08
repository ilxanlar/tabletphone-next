import type ProductCategoryType from './types'
import getProductCategories from './getProductCategories';

type GetProductCategoryBySlugType = {
  data?: ProductCategoryType,
  message?: string,
  status: number
}

export default async function getProductCategoryBySlug(slug: string): Promise<GetProductCategoryBySlugType> {
  try {
    const response = await getProductCategories({
      slug
    })
    return {
      data: response.data[0],
      status: 200
    }
  } catch (error: any) {
    return {
      message: error?.message,
      status: 500
    }
  }
}
