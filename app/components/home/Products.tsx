import { products } from "@/utils/fakeData"
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <div>
        <Heading text="Tüm Ürünler" center={false} />
        <div className="flex flex-wrap items-start gap-3 md:gap-10 min-w-[20%]">
            { products.map((product) => 
                <ProductCard key={product.id} product={product} value={product.reviews}/>
            )}
        </div>
    </div>
  )
}

export default Products