import { PostType } from "@/wp/post/types"
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";

type Props = {
    posts: Array<PostType>
}
export default function PostsList(props: Props) {
    const { posts } = props

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <img
                            src={post.featureImage}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                        <h2>{post.title}</h2>
                        <div>
                            {
                                parse(post.excerpt || "")
                            }
                        </div>
                        <Link href={`/${post.slug}`} >مطالعه بیشتر</Link>
                    </div>
                )
            })}
        </div>
    )
}