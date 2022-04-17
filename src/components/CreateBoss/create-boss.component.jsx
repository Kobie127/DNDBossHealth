import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EnemyDataService from "../../services/EnemyService";

const CreateBoss = () => {

    const initialBossState = {
        id: null,
        name: "",
        description: "",
        health: 0
    }

    const [boss, setBoss] = useState(initialBossState);
    const [resistance, setResistance] = useState('');
    const [immunity, setImmunity] = useState('');
    const [vulnerability, setVulnerability] = useState('');
    const [bossId, setBossId] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        console.log(resistance)
    }, [resistance]);

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setBoss({...boss, [name]: value});
    };

    const handleResistanceChange = (event) => {
        setResistance(event.target.value);
    }

    const handleVulnerabilityChange = (event) => {
        setVulnerability(event.target.value);
    }

    const handleImmunityChange = (event) => {
        setImmunity(event.target.value);
    }

    const saveBoss = () => {
        var data = {
            name: boss.name,
            description: boss.description,
            health: boss.health
        }
        EnemyDataService.create(data)
            .then(response => {
                setBoss({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    health: response.data.health
                });
                setBossId(response.data.id);
                setSubmitted(true);
                console.log(response.data);
                
            })
            .catch(e => {
                console.log(e);
            });
    };

    const saveConditios = () => {
        var resistanceData = {
          name: resistance
        }

        var vulnerabilityData = {
          name: vulnerability
        }

        var immunityData = {
          name: immunity
        }

        EnemyDataService.createResistance(resistanceData, bossId)
          .then(response => {
            setResistance(
              response.data.name
            );
          })
          .catch(e => {
            console.log(e);
          });
        
        EnemyDataService.createVulnerability(vulnerabilityData, bossId)
          .then(response => {
            setVulnerability(
              response.data.name
            );
          })
          .catch(e => {
            console.log(e);
          });

          EnemyDataService.createImmunity(immunityData, bossId)
            .then(response => {
              setImmunity(
                response.data.name
              );
            })
            .catch(e => {
              console.log(e);
            });
    };

    
    const newBoss = () => {
        setBoss(initialBossState);
        setSubmitted(false);
    } 


    return (

        <div className="submit-form">
        {submitted ? (
          <div>
            <label>Select Resistances
                <select value={resistance} onChange={handleResistanceChange}>
                    <option value="slashing">Slashing</option>
                    <option value="bludgeoning">Bludgeoning</option>
                    <option value="lightning">Lightning</option>
                    <option value="piercing">Piercing</option>
                </select>
            </label>
            <label>Select Vulnerabilities
                <select value={vulnerability} onChange={handleVulnerabilityChange}>
                    <option value="slashing">Slashing</option>
                    <option value="bludgeoning">Bludgeoning</option>
                    <option value="lightning">Lightning</option>
                    <option value="piercing">Piercing</option>
                </select>
            </label>
            <label>Select Immunities 
                <select value={immunity} onChange={handleImmunityChange}>
                    <option value="slashing">Slashing</option>
                    <option value="bludgeoning">Bludgeoning</option>
                    <option value="lightning">Lightning</option>
                    <option value="piercing">Piercing</option>
                </select>
            </label>
            <button className="btn btn-success" onClick={saveConditios}>
              Submit Conditions
            </button>
            <button className="btn btn-success" onClick={newBoss}>
              Create a new boss
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={boss.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={boss.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="health">Health</label>
              <input
                type="number"
                className="form-control"
                id="health"
                required
                value={boss.health}
                onChange={handleInputChange}
                name="health"
              />
            </div>
            <button onClick={saveBoss} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    )
}

export default CreateBoss;