import { PageType } from "@/wp/page/types";

export default function Page({ page }: { page: PageType }) {
    return <>
        {page.title}
        <div
            dangerouslySetInnerHTML={{ __html: page.content }}>
        </div>
    </>
}