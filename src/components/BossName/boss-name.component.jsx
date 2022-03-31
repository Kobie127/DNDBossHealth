import React from "react";

const BossName = (props) => {

    const {bossName} = props;

    return (
        <div className="bossName">
            <span>{bossName}</span>
        </div>
    )
}

export default BossName;