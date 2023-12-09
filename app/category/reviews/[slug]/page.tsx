import getCategory from "@/wp/category/getCaregory";
import getPosts from "@/wp/post/getPosts"

export default async function ReviewsPage({ params: { slug } }: { params: { slug: string } }) {
    const id = getCategory(slug)
    const res = await getPosts({ categories: [id] });
    console.log("res", res)
    return (<>
        this is a test page
    </>)
}
