import './App.css';
import TableCreate from "./components/table";
import "./assets/css/compo.css";
import { students } from "./data/StudentsDb";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState("16px");
  
  const changeFontSize = (size) => {
    if (size === "small") {
      setFontSize("16px");
    } else if (size === "medium") {
      setFontSize("20px");
    } else if (size === "large") {
      setFontSize("24px");
    } else {
      setFontSize("16px");
    }
  };
  
  return (
    <>
      <div style={{ fontSize }}>
        <div>
          <h3>Font Size</h3>
          <button onClick={() => changeFontSize("small")}>S</button>
          <button onClick={() => changeFontSize("medium")}>M</button>
          <button onClick={() => changeFontSize("large")}>L</button>
        </div>
        <tr></tr>
        <div>
          <TableCreate students={students}></TableCreate>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
