 "use client"
import useCart from "@/hooks/useCart"
import PageContainers from "../containers/PageContainers"
import Image from "next/image";
import Button from "../general/Button";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";

const CartClient = () => {
  const {cartPrdct, removeCart, deleteCart,addToBasketIncrese,deleteToBasketDecrease} = useCart();

  console.log(cartPrdct)
  if(!cartPrdct || cartPrdct?.length == 0) {
    return <div>sepetinizde ürün bulunmuyor</div>
  }

  let cartPrdctsTotal = cartPrdct.reduce((acc: number, item: CardProductProps) => acc + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="my-3 md:my-10">
      <PageContainers>
        <div>
          <h1 className="mb-3 md:mb-10 font-extrabold text-2xl">Sepetim</h1>
          <div className="flex items-center text-start gap-3 border rounded mb-3 p-2 md:p-3">
                <p className="w-1/5 ">Ürün Resmi</p>
                <p className="w-1/5 ">Ürün Adı</p>
                <p className="w-1/5 ">Adet</p>
                <p className="w-1/5">Fitatı</p>
                <p className="w-1/5"></p>
              </div>
          <div>
            {cartPrdct?.map((item) => (
              <div key={item.id} className="flex items-center text-start gap-3 border rounded mb-3 p-2 md:p-3">
                <div className="w-1/5">
                  <Image width={200} 
                    height={200}  src={item.image} alt={item.name}  className="max-w-20 max-h-20 min-h-full h-20  min-w-20 object-cover rounded"/>
                  </div>
                  <p className="w-1/5 ">{item.name}</p>
                  <p className="w-1/5 ">
                    <Counter cardProduct={item} increaseFunc={()=>addToBasketIncrese(item)} decreaseFunc={()=>deleteToBasketDecrease(item)} />
                  </p>
                  <p className="w-1/5 text-red-500">{item.price}</p>
                  <div className="w-1/5">
                  <div className="float-right">
                    <Button text="Sil" small onClick={() =>  removeCart(item)}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between my-5 py-5 border-t">
          <button onClick={()=> deleteCart()} className=" underline text-sm">Sepeti sil</button>
          <div className="text-lg md:text-xl font-medium text-orange-500">{cartPrdctsTotal} ₺</div>
        </div>
      </PageContainers>
    </div>
  )
}

export default CartClient