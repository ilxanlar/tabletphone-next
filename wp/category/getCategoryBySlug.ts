import { CategoryType } from "./types";
import getCategories from "./getCategories";

type GetCategoryBySlugTypes = {
  data?: CategoryType;
  message?: string;
  status: number;
};
export default async function GetCategoryBySlug(
  slug: string
): Promise<GetCategoryBySlugTypes> {
  try {
    const response = await getCategories({
      slug,
    });
    return {
      data: response.data[0],
      status: 200,
    };
  } catch (error: any) {
    return {
      message: error?.message,
      status: 500,
    };
  }
}
