import getCategories from "@/wp/category/getCaregories";
import getPosts from "@/wp/post/getPosts"
import { notFound } from "next/navigation"


type Props = {
    params: {
        slugs: string[]
    }
}
export default async function ReviewsPage(props: Props) {
    const { params: { slugs } } = props
    const categorySlug = slugs[slugs.length - 1]
    const { data: categoryData } = await getCategories({ slug: [categorySlug] })
    const { data: posts, meta, status } = await getPosts({ categories: [getCategories[0]id] });
    console.log("res", posts)

    if (!posts) {
        return notFound()
    }
    return (<>
        this is a test page
    </>)
}
