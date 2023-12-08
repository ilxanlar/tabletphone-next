import Link from "next/link"
import ProductType from "@/wp/product/types"
import getProductLink from "@/utils/product/getProductLink"

type Props = {
  products: ProductType[]
}

export default function ProductsList(props: Props) {
  const { products } = props

  return (
    <div className="bg-white shadow-lg grid grid-cols-2">
      {products.map((product, key) => {
        const cover = product.images?.[0];
        return (
          <Link key={key} href={getProductLink(product)} className="border-b odd:border-l p-4 text-center">
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
