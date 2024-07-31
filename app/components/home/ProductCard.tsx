import TextClip from "@/utils/TextClip"
import { Rating } from "@mui/material"

const ProductCard = ({product ,value }: { product: any, value:any}) => {
  return (
    <div className="w-[240px] shadow-lg rounded-md p-2 cursor-pointer flex flex-col flex-1">
        <div className="relative">
            <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover" />
        </div>
        <div className="mt-2">
            <div className="text-sm text-slate-500">{TextClip(product.name)}</div>
            <div className="text-sm text-slate-500">{product.price} ₺</div>
            <Rating name="read-only" value={value} readOnly />

        </div>
            
    </div>
  )
}

export default ProductCard