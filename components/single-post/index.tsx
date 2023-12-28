import { PostType } from "@/wp/post/types";
import Image from "next/image";
export default function SinglePost({ post }: { post: PostType }) {

    return <>
        <div> <Image
            width={500}
            height={500}
            src={post.featureImage}
            alt="Picture of the author" />
        </div>
        <h2>{post.title}</h2>
        <div
            dangerouslySetInnerHTML={{ __html: post.content }}>

        </div>
    </>
}