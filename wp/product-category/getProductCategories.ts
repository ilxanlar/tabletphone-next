import wcApi from '@/wp/wcApi';
import transform from './transform';
import type ProductCategoryType from './types';

type ParamsType = {
  order?: 'asc' | 'desc',
  orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count',
  parent?: number,
  page?: number,
  perPage?: number,
  slug?: string
}

type GetProductCategoriesType = {
  data: Array<ProductCategoryType>,
  message?: string,
  status: number
}

export default async function getProductCategories(params: ParamsType = {}): Promise<GetProductCategoriesType> {
  try {
    const response = await wcApi.get('products/categories', {
      ...params,
      per_page: params.perPage ?? 20
    })
    return {
      data: response.data?.map(transform),
      status: 200
    }
  } catch (error: any) {
    return {
      data: [],
      message: error?.message,
      status: 500
    };
  }
}
