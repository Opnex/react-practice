import React from 'react';
import { useState } from "react";
import CompositionA from "./CompositionA";
import CompositionB from "./CompositionB";

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CompositionA count={count} />
            <CompositionB count={count} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Parent;