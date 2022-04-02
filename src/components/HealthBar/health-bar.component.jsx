import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InputDamage from "../InputDamage/input-damage.component";
import HealBoss from "../HealBoss/heal-boss.component";
import healthPic from "../../assets/img/health-bar-removebg-preview.png";
const HealthBar = (props) => {

    const { totalBossHealth } = props;
    const [health, setHealth] = useState(totalBossHealth);
    const [conidtions, setConditions] = useState(new Map());

    console.log(totalBossHealth);

    const currentWidth = Math.round((health / totalBossHealth) * 100);

    const setBossConditions = () => {
        setConditions(prev => new Map([...prev, ['resistances', ['slashing', 'lightning']], ['immunities', '']]))
    }


    console.log(currentWidth);

    const sendDamageToBoss = (index, type) => { 
        if (currentWidth !== 0) {
            let damage = index;
            for (const [key, value] of conidtions.entries()) {
                if (key === 'resistances') {
                    for (let i = 0; i < value.length; i++) {
                        if (type === value[i]) {
                            damage = Math.floor(damage/2);
                            if (health - damage > 0) {
                                setHealth(health - damage);
                            } else {
                                setHealth(0);
                            }
                        }
                    }
                } else {
                    if (health - damage > 0) {
                        setHealth(health - damage);
                    } else {
                        setHealth(0);
                    }
                }
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


    const healthBarStyle = {
        height: 30,
        width: "100%",
    }

    const containerStyles = {
        height: 14.5,
        width: '27.5%',
        backgroundColor: "#e0e0de",
        margin: "auto",
        marginTop: -14.5,
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

    useEffect(() => {
        setBossConditions();
    }, [])

    return (
        <div>
            <InputDamage 
                sendDamageToBoss={sendDamageToBoss} 
            />
            <HealBoss sendHealingToBoss={sendHealingToBoss}/>
            <div style={healthBarStyle}>
                <img src={healthPic} alt="health bar" width="720px"/>
            </div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${currentWidth}%`}</span>
                </div>
            </div>
        </div>
       
    )
}

export default HealthBar;