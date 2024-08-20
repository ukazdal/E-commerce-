import { products } from "@/utils/fakeData"
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <div>
        <Heading text="Tüm Ürünler" center={false} />
        <div className="flex flex-wrap items-start gap-3 md:gap-10 min-w-[20%] px-3 md:px-10">
            {products.slice(0,5).map((product) => 
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    </div>
  )
}

export default Products