import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import wp from '@/wp'
import AddToCart from './AddToCart'
import Specs from './Specs'
import Description from './Description'

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

  const cover = product.images?.[0];

  return (
    <>
      <div className="px-4 py-4">
        {cover ? (
          <div className="px-12">
            <img
              alt={cover.alt}
              className="block mb-4 w-full"
              title={cover.name}
              src={cover.src}
            />
          </div>
        ) : null}
        <h1 className="text-center text-lg leading-6">{product.name}</h1>
        <h2 className="text-center text-sm mt-2 opacity-75">{product.altName}</h2>
        <div className="mt-6 mb-2 text-center text-xl">
          <div dangerouslySetInnerHTML={{ __html: product.priceHtml }}/>
        </div>
        <br/>
      </div>

      <Description product={product} />
      <Specs product={product} />
      <div className="h-4" />
      <AddToCart product={product} />
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
