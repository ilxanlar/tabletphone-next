import type ProductType from '@/wp/product/types'
import Link from 'next/link';
import classes from './Description.module.css'

type Props = {
  product: ProductType
}

export default function Description(props: Props) {
  const { product } = props

  if (!product.shortDescription && !product.reviewUrl) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.heading}>
        <span>نقد و بررسی اجمالی</span>
        &nbsp;
        <small>{product.name}</small>
      </h2>

      {product.shortDescription ? (
        <article
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: product.shortDescription || ''
          }}
        />
      ) : null}

      {product.reviewUrl ? (
        <div className="text-center p-4">
          <Link href={product.reviewUrl} className="bg-blue-500 text-white px-4 py-2 inline-flex rounded-2xl">
            {product.reviewUrlLabel || ''}
          </Link>
        </div>
      ) : null}
    </div>
  )
}
