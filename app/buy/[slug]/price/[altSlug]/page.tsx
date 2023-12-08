import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import wp from '@/wp'
import AddToCart from './AddToCart'
import Specs from './Specs'
import Description from './Description'
import Main from './Main'

type Props = {
  params: {
    slug: string,
    altSlug: string
  }
}

export default async function Page(props: Props) {
  const { params: { slug, altSlug } } = props

  const { data: product } = await wp().getProductBySlug(slug)

  if (!product) {
    return notFound()
  }

  return (
    <>
      <Main product={product} />
      <Description product={product} />
      <Specs product={product} />
      <div className="h-4" />
    </>
  )
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params: { slug, altSlug } } = props

  const { data: product } = await wp().getProductBySlug(slug)
 
  return {
    title: `خرید ${product?.altName}`,
    // description: '',
    openGraph: {
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
