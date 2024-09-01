import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const { value } = useSelector((state) => state.counter)
    console.log(value);
    const dispatch = useDispatch()

    return (
        <div>
            <button>Increment</button>
            <h1>0</h1>
            <button>Decrement</button>
            <h1>0</h1>
        </div>
    );
};

export default Counter;