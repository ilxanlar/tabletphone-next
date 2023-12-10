export type CategoryType = {
  id: number;
  count: number;
  description: string;
  name: string;
  head: string;
  slug: string;
  taxonomy?: string;
  parent?: string;
  link?: string;
  meta?: [];
};

export type GetCatroriesType = {
  data: Array<CategoryType>;
  message?: string;
  meta?: {
    total: number;
    totalPages: number;
  };
  raw?: JSON;
  status: number;
};
