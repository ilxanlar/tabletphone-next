import { head } from "lodash";
import { CategoryType } from "./types";
export default function transform(data: any): CategoryType {
  return {
    id: data.id,
    name: data.name,
    count: data.count,
    description: data.description,
    slug: data.slug,
    taxonomy: data.taxonomy,
    parent: data.parent,
    meta: data.meta,
    head: data.yoast_head,
  };
}
