import { PageType } from "./types";

export default function transform(data: any): PageType {
  return {
    id: data.id,
    date: data.date,
    content: data.content?.rendered || "",
    title: data.title?.rendered || "",
    slug: data.slug,
    header: data.yoast_head || "",
    status: data.status,
    link: data?.link,
    excerpt: data.excerpt?.rendered,
    modified: data?.modified,
    authorId: data?.author,
    comment_status: data?.comment_status,
    type: data?.type,
    meta: data?.meta,
  };
}
