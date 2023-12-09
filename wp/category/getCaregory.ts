export default function getCategory(slug: string) {
  console.log("cat slug", slug);
  const mapIdToSlug: any = {
    "mobile-reviews": 1,
    news: 87,
    "buying-guide": 95,
  };

  return mapIdToSlug[slug] || null;
}
