import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/common";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Activity, Detail } from "./Pages";
import { ARCHIVED_PAGE, UNARCHIVED_PAGE } from "./components/constant";
import { useCalls } from "./context/CallsContext";
const App = () => {
  const { unArchivedCalls, archivedCalls } = useCalls();
  return (
    <Router>
      <div className="container">
        <div style={{ flex: 1 }}>
          <Header />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Activity
                  page={UNARCHIVED_PAGE}
                  dataCall={unArchivedCalls}
                />
              }
            />
            <Route
              path="/all-calls"
              element={
                <Activity page={ARCHIVED_PAGE} dataCall={archivedCalls} />
              }
            />
            <Route path="/call-detail/:id" element={<Detail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
