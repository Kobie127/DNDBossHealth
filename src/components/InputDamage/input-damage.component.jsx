import React from "react";
import { useState } from "react";

const InputDamage = ({sendDamageToBoss}) => {


    const [damage, setDamage] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendDamageToBoss(damage);
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Enter damage for boss:
                <input
                    type="number"
                    value={damage}
                    onChange={(e) => setDamage(e.target.value)}
                />
            </label>
            <input type="submit"></input>
        </form>
    </div>
    )
}

export default InputDamage;