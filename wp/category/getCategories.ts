import { GetCatroriesType } from "./types";
import * as qs from "qs";
import transform from "./transform";

type ParamsType = {
  slug?: string;
};

export default async function getCategories(
  params: ParamsType = {}
): Promise<GetCatroriesType> {
  const queries = decodeURIComponent(qs.stringify(params));
  const url = `https://tabletphone.ir/wp-json/wp/v2/categories?${queries}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
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
