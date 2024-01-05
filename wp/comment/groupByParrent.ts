import { CommentType, groupByParentType } from "./types";

export default function groupByParent(
  comments: CommentType[]
): groupByParentType {
  const groupByParent: any = comments.reduce(
    (map: any, e) => ({
      ...map,
      [e.parent]: [...(map[e.parent] ?? []), e],
    }),
    []
  );
  console.log(groupByParent);
  return groupByParent;
}
