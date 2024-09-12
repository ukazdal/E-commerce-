"use client"

import { useState } from "react";
import PageContainers from "../containers/PageContainers"
import Counter from "../general/Counter"
import {Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "./Comment";
import Heading from "../general/Heading";
import useCart from "@/hooks/useCart";

export type CardProductProps = { 
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    inStock:boolean;
}


const DetailClient = ({product} : {product: any}) => {
    const {productCartQty, addTocart} = useCart();

    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        image: product.image,
        inStock: product.inStock
    });

    const increaseFunc = () => {
        if (cardProduct.quantity >= 10) return; 
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity + 1 }));
      };
      
      const decreaseFunc = () => {
        if (cardProduct.quantity <= 1) return; 
        setCardProduct(prev => ({ ...prev, quantity: prev.quantity - 1 }));
      };

      let productRanting = product.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product.reviews?.length


  return (
    <div className="my-10">
    <PageContainers>
        <div className="block md:flex md:flex-row flex-col gap-10 justify-center mb-5">
            <div className="relative md:h-[300px] w-full md:w-[200px] border rounded-md p-1">
                <img src={product?.image} alt={product?.name} className="rounded-md object-contain h-full w-full" />
            </div>
            <div className="w-full md:w-3/4 space-y-3"> 
                <div className="text-xl md:text-2xl"> 
                    {product?.name}
                </div>
                <Rating name="read-only" value={productRanting} readOnly />
                <div className="text-slate-500">{product?.description}</div>
                <div className="flex items-center gap-2">
                    <div>Stok Durumu :</div>
                    {product.inStock ? <div className="text-green-500">Stokta Var</div> : <div className="text-red-500">Stokta Yok</div>}
                </div>
                <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
                <div className="text-lg md:text-xl text-orange-600 font-bold"> {product?.price} ₺</div>
                <Button text="Sepete Ekle" small onClick={() => addTocart(cardProduct)}/>
            </div>
        </div>
        <Heading text="Yorumlar" />
        <div>
            {product?.reviews?.map((prd: any) => (
                <Comment key={prd.id} prd={prd} />
            ))}
        </div>

        
    </PageContainers>
</div>

  )
}

export default DetailClient