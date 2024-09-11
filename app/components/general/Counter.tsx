import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
    cardProduct: CardProductProps;
    increaseFunc: () => void;
    decreaseFunc: () => void;
}

const Counter:React.FC<CounterProps> = ({ cardProduct,increaseFunc,decreaseFunc}) => {
  return (
    <div className="flex items-center gap-5">
        <div onClick={decreaseFunc}>-</div>
        <div>{cardProduct?.quantity}</div>
        <div onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter