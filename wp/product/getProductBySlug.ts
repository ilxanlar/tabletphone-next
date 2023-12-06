import type ProductType from './types'
import getProducts from './getProducts';

type GetProductBySlugType = {
  data?: ProductType,
  message?: string,
  status: number
}

export default async function getProductBySlug(slug: string): Promise<GetProductBySlugType> {
  try {
    const response = await getProducts({
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
