import * as qs from "qs";
import transform from "./transform";
import { GetPagesType } from "./types";
type ParamsType = {
  slug?: string;
};
export default async function getPages(params: any): Promise<GetPagesType> {
  const queries = decodeURIComponent(qs.stringify(params));
  const url = `https://tabletphone.ir/wp-json/wp/v2/pages?${queries}`;

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
