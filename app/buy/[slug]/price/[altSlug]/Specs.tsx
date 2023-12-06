import type ProductType from '@/wp/product/types'
import classes from './Specs.module.css'

type Props = {
  product: ProductType
}

export default function Specs(props: Props) {
  const { product } = props

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.heading}>
        <span>مشخصات فنی</span>
        &nbsp;
        <small>{product.name}</small>
      </h2>

      <article
        className={classes.specs}
        dangerouslySetInnerHTML={{
          __html: product.specs || ''
        }}
      />
    </div>
  )
}
