import React from "react";
import { useState } from "react";

const InputDamage = ({sendDamageToBoss}) => {


    const [damage, setDamage] = useState(0);
    const [damageType, setDamageType] = useState('slashing');

    const handleSubmit = (event) => {
        event.preventDefault();
        sendDamageToBoss(damage, damageType);
    }

    const handleDamageTypeChange = (event) => {
        console.log(damageType);
        setDamageType(event.target.value);
        console.log(damageType);
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
            <label>Damage Type
                <select value={damageType} onChange={handleDamageTypeChange}>
                    <option value="slashing">Slashing</option>
                    <option value="bludgeoning">Bludgeoning</option>
                </select>
            </label>
            <input type="submit"></input>
        </form>
    </div>
    )
}

export default InputDamage;