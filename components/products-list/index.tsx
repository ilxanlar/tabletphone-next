import Link from "next/link"
import ProductType from "@/wp/product/types"

type Props = {
  products: Array<ProductType>
}

export default function ProductsList(props: Props) {
  const { products } = props

  return (
    <div className="grid grid-cols-2">
      {products.map(product => {
        const cover = product.images?.[0];
        return (
          <Link href={`/buy/${product.slug}/price/${product.altSlug}`} className="border-b odd:border-l p-4 text-center">
            <img
              alt={cover.alt}
              className="block w-full p-2 mb-4"
              title={cover.name}
              src={cover.src}
            />
            <h3 className="leading-5 text-sm">{product.name}</h3>
            <div
              className="mt-2 text-violet-400"
              dangerouslySetInnerHTML={{ __html: product.priceHtml }}
            />
          </Link>
        )
      })}
    </div>
  )
}
