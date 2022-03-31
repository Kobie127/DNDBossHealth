import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InputDamage from "../InputDamage/input-damage.component";

const HealthBar = (props) => {

    const { totalBossHealth } = props;
    const [health, setHealth] = useState(totalBossHealth);

    console.log(totalBossHealth);

    const currentWidth = Math.round((health / totalBossHealth) * 100);

    console.log(currentWidth);

    const sendDamageToBoss = (index) => { 
        setHealth(health - index);
    };

    useEffect(() => {

    }, [currentWidth])

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
    }
    
    const fillerStyles = {
        height: '100%',
        width: `${currentWidth}%`,
        backgroundColor: 'red',
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'right',
    }
    
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
    }

    return (
        <div>
            <InputDamage sendDamageToBoss={sendDamageToBoss}/>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${currentWidth}%`}</span>
                </div>
            </div>
        </div>
       
    )
}

export default HealthBar;