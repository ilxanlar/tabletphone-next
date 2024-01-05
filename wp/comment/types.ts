export type CommentType = {
  id: number;
  postId: number;
  parent: number;
  authorId: number;
  authorName: string;
  date: Date;
  dateGmt: Date;
  content: String;
  status: String;
  type: String;
  childrenLink: [];
};
export type GetComments = {
  data: Array<CommentType>;
  status: number;
  message?: string;
  raw?: any;
};
export type groupByParentType = {
  [key: string]: Array<CommentType>;
};
