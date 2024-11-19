import './App.css';
import "./assets/css/compo.css";
import { students } from "./data/StudentsDb";

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
    <div className="App">
      
    </div>
  );
}

export default App;
