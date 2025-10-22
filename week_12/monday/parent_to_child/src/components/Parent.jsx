import { useState } from 'react'
import Child from './Child'

function Parent() {
    const [message, setMessage] = useState('Hello from Parent');

    return (
        <Child message={message} />
    )
}

export default Parent