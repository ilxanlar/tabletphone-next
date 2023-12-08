import ProductType from "@/wp/product/types"

type Props = {
  product: ProductType
}

export default function Photos(props: Props) {
  const { product } = props

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory scroll-m-0 scroll-p-0 no-scrollbar">
      {product.images.map(image => (
        <figure className="m-0 p-8 max-w-[100vw] min-w-[100vw] snap-always snap-start">
          <img
            alt={image.alt}
            className="block w-full"
            title={image.name}
            src={image.src}
          />
        </figure>
      ))}
    </div>
  )
}
