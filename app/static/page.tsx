export default function StaticPage({ params: { slug } }: { params: { slug?: string } }) {
    return (<>
        <p> this is staticPage {decodeURIComponent(slug || "")}</p>
    </>)
}