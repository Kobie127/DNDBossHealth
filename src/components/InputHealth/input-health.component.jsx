import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const InputHealth = ({sendHealthToParent}) => {

    const [health, setTotalHealth] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendHealthToParent(health);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter total health for boss:
                    <input
                        type="number"
                        value={health}
                        onChange={(e) => setTotalHealth(e.target.value)}
                    />
                </label>
                <input type="submit"></input>
            </form>
        </div>
        
    )
}

export default InputHealth;