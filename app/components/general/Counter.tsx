import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
    cardProduct: CardProductProps;
    increaseFunc: () => void;
    decreaseFunc: () => void;
}

const Counter:React.FC<CounterProps> = ({ cardProduct,increaseFunc,decreaseFunc}) => {
  const buttonStyle = "w-8 h-8 border flex items-center justify-center text-lg bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-md p-2";

  return (
    <div className="flex items-center gap-5">
        <div className={buttonStyle} onClick={decreaseFunc}>-</div>
        <div className="text-lg md:text-xl font-medium">{cardProduct?.quantity}</div>
        <div className={buttonStyle} onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter