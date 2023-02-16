import React from "react";

interface Props {
    start: number;
    end: number;
}

export default function Counter(props: Props) {
    const [count, setCount] = React.useState(props.start);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <div>{count}</div>
        </div>
    );
}