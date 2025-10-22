import { useState } from "react";

function Child({ onNameChange }) {
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onNameChange(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button type="submit">Send to Parent</button>
            </form>
        </div>
    )
}
export default Child;