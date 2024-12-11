import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleString());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React App</h1>
        <p>Current time: {currentTime}</p>
        <button
          onClick={updateTime}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#61dafb",
            border: "none",
            borderRadius: "4px",
            color: "black",
          }}
        >
          Update Time
        </button>
      </header>
    </div>
  );
}

export default App;
