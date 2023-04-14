import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy, decrementBy } from "../actions/counterActions";
import { useState} from "react";


function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleIncrementBy = () => {
        dispatch(incrementBy(input));
    }

    const handleDecrementBy = () => {
        dispatch(decrementBy(input));
    }

    return (
        <div>
            <button onClick={handleDecrement}>Decrement</button>
            <p> {counter} </p>
            <button onClick={handleIncrement}>Increment</button>
            <p>
                <button onClick={handleDecrementBy}>Decrement by</button>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleIncrementBy}>Increment by</button>
            </p>
        </div>
    );
}

export default Counter;
