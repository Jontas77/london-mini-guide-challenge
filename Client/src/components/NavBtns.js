import React, { useState } from 'react';
import Table from "./Table";

const NavBtns = ({ cityList }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const categoryToggle = (e) => {
    let categoryVal = e.target.value;
    fetch(`/${cityList}/${categoryVal}`)
    .then(res => res.json())
    .then(data => {
      setCategory(data)
      setLoading(true);
    })
    .catch(err => err = setError("Failed to fetch"))
  }

    return (
      <>
        {error && !loading && (
          <>
            <div className="alert-danger">
              <h5>
                check out your request, a city and category must be chosen, No
                default values are provided
              </h5>
            </div>
            <hr />
          </>
        )}
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
            <button
              className="nav-link"
              value="doctors"
              onClick={categoryToggle}
            >
              Doctors
            </button>
          </li>
        </ul>
        <Table data={category} loading={loading} />
      </>
    );
};

export default NavBtns;
