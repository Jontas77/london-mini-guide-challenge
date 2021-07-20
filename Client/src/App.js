import React from "react";

// Import Components
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <hr />
        <Dropdown />
      </div>
    </div>
  );
};

export default App;
