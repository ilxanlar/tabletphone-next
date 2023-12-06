import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: {
    slug: string,
    altSlug: string
  }
}

export default async function Page(props: Props) {
  const { params: { slug, altSlug } } = props

  return (
    <div>
      <h1>{slug}</h1>
      <h2>{altSlug}</h2>
    </div>
  )
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params: { slug, altSlug } } = props
 
  return {
    title: slug,
    description: altSlug,
    openGraph: {
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
