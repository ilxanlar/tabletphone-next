import transform from "./transform";
import PostType from "./types";
import * as qs from "qs";

type ParamsType = {
  page?: string;
  perPage?: string;
  slug?: string;
  categories?: string[];
};

type GetPostsType = {
  data: Array<PostType>;
  message?: string;
  meta?: {
    total: number;
    totalPages: number;
  };
  raw?: JSON;
  status: number;
};

export default async function getPosts(
  params: ParamsType = {}
): Promise<GetPostsType> {
  const queries = decodeURIComponent(qs.stringify(params));
  const url = `https://tabletphone.ir/wp-json/wp/v2/posts?${queries}`;
  console.log("url", url);
  try {
    const response = await fetch(url);
    const meta = {
      total: Number(response.headers.get("x-wp-total")),
      totalPages: Number(response.headers.get("x-wp-totalpages")),
    };
    const data = await response.json();
    return {
      data: data.map(transform),
      meta,
      raw: data,
      status: 200,
    };
  } catch (error) {
    return {
      data: [],
      message: error?.message,
      status: 500,
    };
  }
}
