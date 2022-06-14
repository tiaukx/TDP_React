import { useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0);
    return (
        <>
            <input type="number" value={count}/><br/>
            <button onClick={() => setCount(count - 5)}>-5</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count = 0)}>RESET</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count + 5)}>+5</button>
        </>
    )
}

export default Counter;