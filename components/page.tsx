import { PageType } from "@/wp/page/types";
import React from "react";
export default function Page({ page, children }: { page: PageType, children?: React.ReactElement }) {
    return <>
        {page.title}
        <div
            dangerouslySetInnerHTML={{ __html: page.content }}>
        </div>
        {children}
    </>
}