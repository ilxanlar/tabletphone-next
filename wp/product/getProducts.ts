import wcApi from '@/wp/wcApi'
import transform from './transform';
import type ProductType from './types';

type ParamsType = {
  page?: number,
  perPage?: number,
  slug?: string
}

type GetProductsType = {
  data: Array<ProductType>,
  message?: string,
  raw?: JSON,
  status: number
}

export default async function getProducts(params: ParamsType = {}): Promise<GetProductsType> {
  try {
    const response = await wcApi.get('products', {
      ...params,
      per_page: params.perPage ?? 20
    })
    return {
      data: response.data?.map(transform),
      raw: response.data,
      status: 200
    }
  } catch (error: any) {
    return {
      data: [],
      message: error?.message,
      status: 500
    }
  }
}
