"use client"

import useCart from "@/hooks/useCart";
import { RiShoppingBasketFill } from "react-icons/ri"

const CardCount = () => {
  const {cartPrdct} = useCart();

  return (
    <div className="hidden md:flex relative">
      <RiShoppingBasketFill size={30} />
      <div className="absolute -top-2 -right-2 bg-white text-orange-500 w-5 h-5 flex items-center justify-center rounded-full text-xs"> {cartPrdct?.length ?? 0}</div>
    </div>
  )
}

export default CardCount