import ProductType from "@/wp/product/types"
import Photos from "./Photos"
import AddToCart from "./AddToCart"

type Props = {
  product: ProductType
}

export default function Main(props: Props) {
  const { product } = props

  return (
    <div className="bg-white mb-4 shadow-lg">
      {product.ratingCount > 0 ? (
        <span className="absolute left-0 top-0 bg-yellow-600">
          {product.averageRating}
        </span>
      ) : null}
      <Photos product={product} />
      <h1 className="text-center text-lg leading-6 mx-4">{product.name}</h1>
      <h2 className="text-center text-sm mt-2 opacity-75 mx-4">{product.altName}</h2>
      {product.priceHtml ? (
        <div className="mt-6 mb-2 text-center text-xl">
          <div dangerouslySetInnerHTML={{ __html: product.priceHtml }}/>
        </div>
      ) : null}
      <br/>
      <AddToCart product={product} />
    </div>
  )
}
