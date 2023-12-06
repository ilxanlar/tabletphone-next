import ProductCategoryType from './types';

export default function transform(data: any): ProductCategoryType {
  return {
    id: data.id,
    image: data.image,
    name: data.name,
    slug: data.slug,
  }
}
