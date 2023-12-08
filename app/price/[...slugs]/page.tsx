import { notFound } from "next/navigation"
import ProductsList from "@/components/products-list"
import wp from "@/wp"
import Breadcrumbs from "@/components/breadcrumbs"

type Props = {
  params: {
    slugs: string[]
  }
}

export default async function Page(props: Props) {
  const { params: { slugs } } = props

  const categorySlug = slugs[slugs.length - 1]

  const { data: category } = await wp().getProductCategoryBySlug(categorySlug)

  const { data: products } = await wp().getProducts()

  if (!category) {
    return notFound()
  }

  return (
    <main>
      <Breadcrumbs crumbs={slugs.map(slug => ({ label: slug, url: slug }))} />

      <header className="bg-white shadow-lg px-8 py-8 mb-4">
        {category.image?.src ? (
          <img className="block w-full mb-4" src={category.image?.src} />
        ) : null}
        <h1 className="font-black text-4xl text-center">{category.name}</h1>
      </header>
      <ProductsList products={products} />
    </main>
  )
}
