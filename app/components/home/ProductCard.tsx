"use client"
import TextClip from "@/utils/TextClip"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

const ProductCard = ({product }: { product: any}) => {
  const router = useRouter()

  let productRanting = product.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product.reviews?.length

  return (
    <div onClick={() => router.push(`product/${product.id}`)} className="w-[240px] shadow-lg rounded-md p-2 cursor-pointer flex flex-col flex-1">
        <div className="relative">
            <Image width={400} height={200} src={product.image} alt={product.name} className="object-cover" />
        </div>
        <div className="mt-2">
            <div className="text-sm text-slate-500">{TextClip(product.name)}</div>
            <div className="text-sm text-slate-500">{product.price} ₺</div>
            <Rating name="read-only" value={productRanting} readOnly />

        </div>
            
    </div>
  )
}

export default ProductCard