import getPosts from "./post/getPosts";
import getProducts from "./product/getProducts";
import getProductBySlug from "./product/getProductBySlug";
import getProductCategoryBySlug from "./product-category/getProductCategoryBySlug";
import getProductCategories from "./product-category/getProductCategories";
import getCategories from "./category/getCategories";
import getCategoryBySlug from "./category/getCategoryBySlug";

// interface WpTypes {
//   getPosts: Promise<any>;
//   getProducts: Promise<any>;
//   getProductBySlug: (slug: string) => Promise<any>;
//   getProductCategories: (productId: number) => Promise<any>;
//   getProductCategoryBySlug: (categorySlug: string) => Promise<any>;
//   getCategories: Promise<any>;
//   getCategoryBySlug: (slug: string) => Promise<any>;
// }
function wp() {
  return {
    getPosts,
    getProducts,
    getProductBySlug,
    getProductCategories,
    getProductCategoryBySlug,
    getCategories,
    getCategoryBySlug,
  };
}

export default wp;
