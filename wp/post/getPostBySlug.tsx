import getPosts from "./getPosts";
import { PostType } from "./types";
type GetPostBySlugType = {
    data?: PostType;
    message?: string;
    status: number;
};
export default async function GetPostBySlug(slug: string): Promise<GetPostBySlugType> {

    try {
        const response = await getPosts({
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