import getPages from "./getPages";
import { PageType } from "./types";

type GetPagetBySlugType = {
  data?: PageType;
  message?: string;
  status: number;
};

export default async function getPageBySlug(
  slug: string
): Promise<GetPagetBySlugType> {
  try {
    const response = await getPages({
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
