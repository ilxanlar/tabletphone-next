import SinglePost from "@/components/single-post";
import getPageOrPostBySlug from "@/wp/page/getPageOrPostBySlug"
import { PostType } from "@/wp/post/types";
import { notFound } from "next/navigation";

import type { Metadata } from 'next'
import Page from "@/components/page";
import { PageType } from "@/wp/page/types";


export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
    const { data } = await getPageOrPostBySlug(slug)

    return {
    }

}
export default async function PageOrPostPage({ params: { slug } }: { params: { slug: string } }) {

    const { data: result } = await getPageOrPostBySlug(slug);
    if (!result) {
        return notFound()
    }
    if (result?.type == "page") {
        const page = result as PageType
        return <Page page={page} />
    }
    if (result?.type == "post") {
        const post = result as PostType
        return <SinglePost post={post} />
    }



}