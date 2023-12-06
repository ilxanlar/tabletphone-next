import type ProductType from '@/wp/product/types'
import Link from 'next/link';
import classes from './Description.module.css'

type Props = {
  product: ProductType
}

export default function Description(props: Props) {
  const { product } = props

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.heading}>
        <span>نقد و بررسی اجمالی</span>
        &nbsp;
        <small>{product.name}</small>
      </h2>

      <article
        className={classes.content}
        dangerouslySetInnerHTML={{
          __html: product.shortDescription || ''
        }}
      />

      {product.reviewUrl ? (
        <div>
          <Link href={product.reviewUrl}>
            {product.reviewUrlLabel || ''}
          </Link>
        </div>
      ) : null}
    </div>
  )
}
