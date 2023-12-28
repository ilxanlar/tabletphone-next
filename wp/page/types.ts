export type PageType = {
  id: number | string;
  date: string;
  content: string;
  title: string;
  slug: string;
  header: string;
  status: string;
  link: string;
  excerpt: string;
  modified: string;
  authorId: number | string;
  comment_status: string;
  type: string;
  meta: [];
};

export type GetPagesType = {
  data: Array<PageType>;
  message?: string;
  meta?: {
    total: number;
    totalPages: number;
  };
  raw?: JSON;
  status: number;
};
