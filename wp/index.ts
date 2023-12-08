import getPosts from './post/getPosts'
import getProducts from './product/getProducts'
import getProductBySlug from './product/getProductBySlug'
import getProductCategoryBySlug from './product-category/getProductCategoryBySlug'
import getProductCategories from './product-category/getProductCategories'

function wp() {
  return {
    getPosts,
    getProducts,
    getProductBySlug,
    getProductCategories,
    getProductCategoryBySlug,
  }
}

export default wp
