import React from 'react'

const NavBtns = () => {

  const categoryToggle = (e) => {
    console.log(e.target.value);
  }

    return (
      <ul className="nav-btns-container">
        <li className="nav-btn">
          <button
            className="nav-link"
            value="pharmacies"
            onClick={categoryToggle}
          >
            Pharmacies
          </button>
        </li>
        <li className="nav-btn">
          <button
            className="nav-link"
            value="colleges"
            onClick={categoryToggle}
          >
            Schools & Colleges
          </button>
        </li>
        <li className="nav-btn">
          <button
            className="nav-link"
            value="hospitals"
            onClick={categoryToggle}
          >
            Hospitals
          </button>
        </li>
        <li className="nav-btn">
          <button className="nav-link" value="doctors" 
          onClick={categoryToggle}
          >
            Doctors
          </button>
        </li>
      </ul>
    );
};

export default NavBtns;
