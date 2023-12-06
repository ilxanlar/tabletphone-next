import PostType from './types';

export default function transform(data: any): PostType {
  return {
    content: data.content?.rendered || '',
    id: data.id,
    title: data.title?.rendered || '',
    slug: data.slug,
  }
}
