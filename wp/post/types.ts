export type PostType = {
  id: number;
  slug: string;
  title: string;
  content: string;
  header: string; // ???
  link: string;
  date: string; // ISO8601 compliant date
  date_gmt?: string; // ISO8601 compliant date
  status: "publish" | "future" | "draft" | "pending" | "private";
  categories: number[];
  featureImage: string; //??
  excerpt?: string;
  modified?: string; // ISO8601 compliant date
  modified_gmt?: string; // ISO8601 compliant date
  authorId?: number; // Author ID
  featured_media?: number;
  sticky?: boolean;
  comment_status?: "open" | "closed";
  template?: string;
  format?: string;
  tags?: any[];
  type?: string;
};
export type GetPostsType = {
  data: Array<PostType>;
  message?: string;
  meta?: {
    total: number;
    totalPages: number;
  };
  raw?: JSON;
  status: number;
};
