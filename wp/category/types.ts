export type CategoryType = {
  id: string;
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

export type GetCategoriesType = {
  data: Array<CategoryType>;
  message?: string;
  meta?: {
    total: number;
    totalPages: number;
  };
  raw?: JSON;
  status: number;
};
