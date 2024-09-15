"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useState, useContext, useCallback, useEffect } from "react";

interface CartContextProps {
 productCartQty: number;
 cartPrdct: CardProductProps[] | null;
 addTocart: (product: CardProductProps) => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props { 
    [porpname: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState<number>(0);
    const [cartPrdct, setCartPrdct] = useState<CardProductProps[] | null>(null);

    useEffect (() => { 
        let getItem: any = localStorage.getItem("cart");
        let getItemParse: CardProductProps[] | null = JSON.parse(getItem);
        setCartPrdct(getItemParse)
     }, []);

    const addTocart = useCallback((product: CardProductProps)=> {
        setCartPrdct(prev => {
            let updatedCart;
            if(prev) {
                updatedCart = [...prev, product]
            }else {
                updatedCart = [product]
            }
            localStorage.setItem("cart", JSON.stringify(updatedCart))
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