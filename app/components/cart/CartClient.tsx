 "use client"
import useCart from "@/hooks/useCart"
import PageContainers from "../containers/PageContainers"
import Image from "next/image";
import Button from "../general/Button";

 

const CartClient = () => {
  const {cartPrdct} = useCart();

  console.log(cartPrdct)
  if(!cartPrdct || cartPrdct?.length == 0) {
    return <div>sepetinizde ürün bulunmuyor</div>
  }
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
                <p className="w-1/5 ">{item.quantity}</p>
                <p className="w-1/5 text-red-500">{item.price}</p>
                <div className="w-1/5">
                <Button text="Sil" onClick={()=> {}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainers>
    </div>
  )
}

export default CartClient