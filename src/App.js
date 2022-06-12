import { useState } from "react";
import "./App.css";
import Content from "./components/Content";

function App() {
  const [show, setShow] = useState(false);
  
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>{show ? "hide" : "show"}</button>
      {show && <Content />}
    </div>
  );
}

export default App;
