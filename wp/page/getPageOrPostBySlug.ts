import { PageType } from "./types";
import { PostType } from "../post/types";
import GetPostBySlug from "../post/getPostBySlug";
import getPageBySlug from "./getPageBySlug";

type GetPageOrPostType = {
  data?: PostType | PageType;
  message?: string;
  status?: number;
};
// awaited
export default async function getPageOrPostBySlug(
  slug: string
): Promise<GetPageOrPostType> {
  const { data: post, status: postRequestStatus } = await GetPostBySlug(slug);
  if (post) {
    return {
      data: post,
      status: 200,
    };
  }

  const { data: page } = await getPageBySlug(slug);
  if (page) {
    return {
      data: page,
      status: 200,
    };
  }

  return {
    message: "slug is not valid",
    status: 500,
  };
}
