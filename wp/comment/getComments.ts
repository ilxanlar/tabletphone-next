import transform from "./transform";
import { GetComments } from "./types";
import * as qs from "qs";
export const revalidate = 0;

type ParamsType = {
  post?: number | string;
  parrent?: number;
};
export default async function getComments(
  params: ParamsType = {}
): Promise<GetComments> {
  const queries = decodeURIComponent(qs.stringify(params));
  const url = process.env.WP_BASE_URL || "";
  console.log("queries", url + "comments&" + queries);
  try {
    const response = await fetch(url + "comments?" + queries);
    const data = await response.json();
    return {
      data: data.map(transform),
      raw: data,
      status: 200,
    };
  } catch (error) {
    return {
      data: [],
      message: error?.message || "",
      status: 500,
    };
  }
}
