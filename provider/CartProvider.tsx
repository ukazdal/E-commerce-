
import {CartContextProvider } from "@/hooks/useCart";

const CartProvider = ({children}: {children:React.ReactNode}) => {
    return (
    <CartContextProvider>
        <div>{children}</div>
    </CartContextProvider>

  )
}

export default CartProvider