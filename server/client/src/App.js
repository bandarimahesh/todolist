import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
function App(props) {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
