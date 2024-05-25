import React from "react";
import "./App.css";
import BMICalculator from "./components/BMICalculator";

function App() {
  return (
    <>
      <div className="page">
        <div className="content">
          <BMICalculator />
        </div>
      </div>
    </>
  );
}

export default App;
