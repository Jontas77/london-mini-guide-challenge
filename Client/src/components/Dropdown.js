import React from 'react';

const Dropdown = () => {
    return (
        <div className="dropdown">
            <span>Choose a city: </span>
            <select id="selectCity">
                <option value="no-city">Select City</option>
                <option value="harrow">Harrow</option>
                <option value="stratford">StratFord</option>
                <option value="heathrow">Heathrow</option>
            </select>
        </div>
    );
};

export default Dropdown
