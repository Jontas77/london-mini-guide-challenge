import React from "react";
import StratfordData from "./data/Stratford.json";

// Import Components
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import NavBtns from "./components/NavBtns";
import Table from "./components/Table";

const App = () => {
  

  return (
    <div className="App">
      <div className="container">
        <Header />
        <hr />
        <Dropdown />
        <hr/>
        <NavBtns />
        <Table data={StratfordData} />
      </div>
    </div>
  );
};

export default App;
