import React from "react";
import { useState } from "react";

const HealBoss = ({sendHealingToBoss}) => {

    const [heal, setHealing] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendHealingToBoss(heal);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter healing amount for boss:
                    <input
                        type="number"
                        value={heal}
                        onChange = {(e) => setHealing(e.target.value)}
                    />
                </label>
                <input type="submit"></input>
            </form>
        </div>
    );

}


export default HealBoss;