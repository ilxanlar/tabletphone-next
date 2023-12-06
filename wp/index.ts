import getPosts from './post/getPosts'
import getProducts from './product/getProducts'
import getProductBySlug from './product/getProductBySlug'
import getProductCategories from './product-category/getProductCategories'

function wp() {
  return {
    getPosts,
    getProductCategories,
    getProductBySlug,
    getProducts
  }
}

export default wp
