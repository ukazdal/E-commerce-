"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import toast from "react-hot-toast";

interface CartContextProps {
 productCartQty: number;
 cartPrdct: CardProductProps[] | null;
 addTocart: (product: CardProductProps) => void;
 removeCart: (product: CardProductProps) => void;
 deleteCart: () => void;
 addToBasketIncrese: (product: CardProductProps) => void;
 deleteToBasketDecrease: (product: CardProductProps) => void;
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

     //sepeti sil
     const deleteCart = useCallback(() => {
        setCartPrdct(null);
        
        toast.success('Sepet silindi...')
        localStorage.setItem("cart", JSON.stringify(null))
     }, []);


     //sepete ekle
     const addTocart = useCallback((product: CardProductProps) => {
        setCartPrdct(prev => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
        toast.success('Ürün Sepete Eklendi...');
    }, []);
    
    //sepetten sil
    const removeCart = useCallback((product: CardProductProps) => {
        if(cartPrdct){
            const filteredProduct= cartPrdct.filter(cart => cart.id !== product.id)
            setCartPrdct(filteredProduct)
            toast.success('Ürün Silindi...')
            localStorage.setItem("cart", JSON.stringify(filteredProduct))
        } 
    },[cartPrdct])

    const addToBasketIncrese = useCallback((product: CardProductProps) => {
        let updatedCart;
        if(product.quantity == 10) {
            return toast.error('10 adetten fazla ürün ekleyemezsiniz')
        }
        if(cartPrdct) {
            updatedCart = [...cartPrdct]
            const existingItem = cartPrdct.findIndex(item => item.id === product.id)
            if(existingItem > -1) {
                updatedCart[existingItem].quantity = ++ updatedCart[existingItem].quantity
            }
            setCartPrdct(updatedCart)
            localStorage.setItem("cart",JSON.stringify(updatedCart))
        }
    }, [cartPrdct])

    const deleteToBasketDecrease = useCallback((product: CardProductProps) => {
        let updatedCart;
        if(product.quantity == 10) {
            return toast.error('10 adetten fazla ürün ekleyemezsiniz')
        }
        if(cartPrdct) {
            updatedCart = [...cartPrdct]
            const existingItem = cartPrdct.findIndex(item => item.id === product.id)
            if(existingItem > -1) {
                updatedCart[existingItem].quantity = -- updatedCart[existingItem].quantity
            }
            setCartPrdct(updatedCart)
            localStorage.setItem("cart",JSON.stringify(updatedCart))
        }
    }, [cartPrdct]),

     value = {
        productCartQty,
        addTocart,
        cartPrdct,
        removeCart,
        deleteCart,
        addToBasketIncrese,
        deleteToBasketDecrease
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