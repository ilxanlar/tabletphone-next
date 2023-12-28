import { PostType } from "./types";

export default function transform(data: any): PostType {
  return {
    content: data.content?.rendered || "",
    id: data.id,
    title: data.title?.rendered || "",
    slug: data.slug,
    header: data.yoast_head || "",
    date: data.date,
    status: data.status,
    categories: data.categories,
    featureImage: data._embedded["wp:featuredmedia"]["0"].source_url,
    link: data?.link,
    excerpt: data.excerpt?.rendered,
    modified: data?.modified,
    authorId: data?.author,
    featured_media: data?.featured_media,
    sticky: data?.sticky,
    comment_status: data?.comment_status,
    template: data?.template,
    format: data?.format,
    tags: data?.tags,
    type: data?.type,
  };
}
