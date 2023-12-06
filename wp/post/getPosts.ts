import transform from './transform';
import PostType from './types';

type ParamsType = {
  page?: number,
  perPage?: number,
  slug?: string
}

type GetPostsType = {
  data: Array<PostType>,
  message?: string,
  meta?: {
    total: number,
    totalPages: number,
  },
  raw?: JSON,
  status: number
}

export default async function getPosts(params: ParamsType = {}): Promise<GetPostsType> {
  try {
    const response = await fetch('https://tabletphone.ir/wp-json/wp/v2/posts?_embed&_fields=id,slug,title');
    const meta = {
      total: Number(response.headers.get('x-wp-total')),
      totalPages: Number(response.headers.get('x-wp-totalpages')),
    };
    const data = await response.json();
    return {
      data: data.map(transform),
      meta,
      raw: data,
      status: 200
    };
  } catch (error) {
    return {
      data: [],
      message: error?.message,
      status: 500
    }
  }
}
