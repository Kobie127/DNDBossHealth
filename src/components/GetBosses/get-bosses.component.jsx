import React from "react";
import { useEffect, useState } from "react";
import EnemyDataService from "../../services/EnemyService";

const GetBosses = () => {

    const [bosses, setBosses] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1)

    useEffect(() => {
        getBosses();
    }, [])

    const getBosses = () => {
        EnemyDataService.getAll()
            .then(response => {
                setBosses(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <ul>
                {bosses &&
                    bosses.map((boss, index) => (
                    <li
                        className={
                        "list-group-item " + (index === currentIndex ? "active" : "")
                        }
                        
                        key={index}
                    >
                        {boss.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetBosses;