import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InputDamage from "../InputDamage/input-damage.component";
import HealBoss from "../HealBoss/heal-boss.component";

const HealthBar = (props) => {

    const { totalBossHealth } = props;
    const [health, setHealth] = useState(totalBossHealth);

    console.log(totalBossHealth);

    const currentWidth = Math.round((health / totalBossHealth) * 100);

    console.log(currentWidth);

    const sendDamageToBoss = (index) => { 
        if (currentWidth !== 0) {
            if (health - index > 0) {
                setHealth(health - index);
            } else {
                setHealth(0);
            }
        }
        
    };

    const sendHealingToBoss = (index) => {
        if (currentWidth !== 100) {
            if (health + parseInt(index) > totalBossHealth) {
                setHealth(totalBossHealth);
            } else {
                setHealth(health + parseInt(index));
            }
        }
    }


    const containerStyles = {
        height: 20,
        width: '75%',
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
            <HealBoss sendHealingToBoss={sendHealingToBoss}/>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${currentWidth}%`}</span>
                </div>
            </div>
        </div>
       
    )
}

export default HealthBar;