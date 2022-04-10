import React from "react";
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
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setBoss({...boss, [name]: value});
    };

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
                setSubmitted(true);
                console.log(response.data);
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
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newBoss}>
              Add
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
                required
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