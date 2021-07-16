import React from 'react';

const Dropdown = () => {

    const cityToggle = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="dropdown">
            <span>Choose a city: </span>
            <select id="selectCity" onChange={cityToggle}>
                <option value="no-city">Select City</option>
                <option value="harrow">Harrow</option>
                <option value="stratford">StratFord</option>
                <option value="heathrow">Heathrow</option>
            </select>
        </div>
    );
};

export default Dropdown
