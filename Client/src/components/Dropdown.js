import React, { useState } from 'react';
import NavBtns from './NavBtns';

const Dropdown = () => {
    const [cityList, setCityList] = useState("");
    
    const cityToggle = (e) => {
        setCityList(val => val = e.target.value)
    }

    return (
      <div className="dropdown">
        <span>Choose a city: </span>
        <select id="selectCity" onChange={(e) => cityToggle(e)}>
          <option value="no-city">Select City</option>
          <option value="harrow">Harrow</option>
          <option value="stratford">StratFord</option>
          <option value="heathrow">Heathrow</option>
        </select>
        <hr className="mt-2 mb-2" />
      
        <NavBtns cityList={cityList} />
      </div>
    );
};

export default Dropdown
