import { CategoryType } from "./types";
import * as qs from "qs";
import transform from "./transform";

type ParamsType = {
  slug?: string[];
};

export default async function getCategory(
  params: ParamsType = {}
): Promise<CategoryType> {
  const queries = decodeURIComponent(qs.stringify(params));
  const url = `https://tabletphone.ir/wp-json/wp/v2/posts?${queries}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // const meta = {
    //   total: Number(response.headers.get("x-wp-total")),
    //   totalPages: Number(response.headers.get("x-wp-totalpages")),
    // };
    return {
      data: data.map(transform),
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
