type Params = {
  altSlug: string,
  slug: string
}

export default function getProductLink({ altSlug, slug }: Params, append = '') {
  return `/buy/${slug}/price/${altSlug}${append}`
}
