export default function transform(data: any) {
  return {
    id: data.id,
    postId: data.post,
    parent: data.parent,
    authorId: data.author,
    authorName: data.author_name,
    date: data.date,
    dateGmt: data.date_gmt,
    content: data.content?.rendered || "",
    status: data.status,
    type: data.type,
    childrenLink: data._link?.children || [],
  };
}
