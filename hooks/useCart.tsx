"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useState, useContext, useCallback } from "react";

interface CartContextProps {
 productCartQty: number;
 cartPrdct: CardProductProps[];
 addTocart: (product: CardProductProps) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props { 
    [porpname: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState<number>(0);
    const [cartPrdct, setcartPrdct] = useState<CardProductProps[] | null>(null);

    const addTocart = useCallback((product: CardProductProps)=> {
        setcartPrdct(prev => {
            let updatedCart;
            if(prev) {
                updatedCart = [...prev, product]
            }else {
                updatedCart = [product]
            }
            return updatedCart
        })
    }, [cartPrdct]);

    let value = {
        productCartQty,
        addTocart,
        cartPrdct
    }

    return (
        <CartContext.Provider value={value} {...props}>
            {props.children}
        </CartContext.Provider>
    )

}


const useCart = () => {
    const context = useContext(CartContext)
 if(context === null) {
     throw new Error("useCart must be used within a CartContextProvider")
 }
 return context
}

export default useCart