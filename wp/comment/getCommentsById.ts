import { promises } from "dns";
import getComments from "./getComments";
import { CommentType } from "./types";

type GetCommentsById = {
  data: Array<CommentType>;
  status: number;
  message?: string;
};
export default async function getCommentsById(
  id: string | number
): Promise<GetCommentsById> {
  try {
    const { data: comments } = await getComments({ post: id });
    return {
      data: comments,
      status: 200,
    };
  } catch (error) {
    return {
      data: [],
      message: error?.message || "error ",
      status: 500,
    };
  }
}
