import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const { value } = useSelector((state) => state.counter)
    console.log(value);
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <h1>{value}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button> <br />
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    );
};

export default Counter;