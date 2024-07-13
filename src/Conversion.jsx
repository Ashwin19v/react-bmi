import { useState } from "react";

export const Conversion = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setstatus] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    if (height && weight) {
      const h = height / 100;
      const bmiValue = weight / (h * h);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) setstatus("UnderWeight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setstatus("Normal Weight");
      else setstatus("obese");
      setError("");
    } else {
      setBmi(null);
      setstatus("");
      setError("Please enter valid details");
    }
  };
  const cal = (e) => {
    if (e.key === "Enter") {
      calculate();
    }
  };
  const clear = () => {
    setHeight("");
    setWeight("");
    setError("");
    setstatus("");
    setBmi(null);
  };
  return (
    <>
      <div className="calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {error && <p className="error">{error}</p>}
          <div className="container">
            <label htmlFor="height">Height [cm] : </label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            ></input>
          </div>
          <div className="container">
            <label htmlFor="weight">Weight [kg] : </label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              onKeyDown={cal}
              required
            ></input>
          </div>
          <div className="btns">
            <button onClick={calculate} className="btn">
              Calculate
            </button>
            <button onClick={clear}>Clear</button>
          </div>

          {bmi !== null && (
            <div className="result">
              <p>Your BMI is :{bmi} </p>
              <p>Status :{status} </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
