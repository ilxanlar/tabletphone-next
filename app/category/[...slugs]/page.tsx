import getCategories from "@/wp/category/getCategories";
import GetCategoryBySlug from "@/wp/category/getCategoryBySlug";
import wp from "@/wp";
import getPosts from "@/wp/post/getPosts"
import { notFound } from "next/navigation"
import PostsList from "@/components/posts-list";


type Props = {
    params: {
        slugs: string[]
    }
}
export default async function CategoryPage(props: Props) {
    const { params: { slugs } } = props
    const slug = slugs[slugs.length - 1]
    const { data: categoryData } = await GetCategoryBySlug(slug)
    if (!categoryData) {
        return notFound()
    }
    const { data: posts, meta, status } = await getPosts({ categories: [categoryData?.id] });
    if (!posts) {
        return notFound()
    }
    console.log(posts)
    return (
        <section>
            <h2>{categoryData.name}</h2>
            <PostsList posts={posts} />
        </section >)

}
