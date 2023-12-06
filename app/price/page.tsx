import wp from "@/wp";
import ProductsList from "@/components/products-list";

export default async function Page() {
  const response = await wp().getProducts()

  return (
    <main>
      <ProductsList products={response.data} />
    </main>
  )
}
