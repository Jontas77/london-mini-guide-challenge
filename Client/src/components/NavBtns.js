import React from 'react'

const NavBtns = () => {
    return (
      <ul className="nav-btns-container">
        <li className="nav-btn">
          <button className="nav-link">Pharmacies</button>
        </li>
        <li className="nav-btn">
          <button className="nav-link">Schools & Colleges</button>
        </li>
        <li className="nav-btn">
          <button className="nav-link">Hospitals</button>
        </li>
        <li className="nav-btn">
          <button className="nav-link">Doctors</button>
        </li>
      </ul>
    );
};

export default NavBtns;
