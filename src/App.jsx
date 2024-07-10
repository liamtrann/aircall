import React from "react";
import Header from "./Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container-view">Some activities should be here</div>
      </div>
    </Router>
  );
};

export default App;
