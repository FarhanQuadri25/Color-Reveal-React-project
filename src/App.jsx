import React from "react";
import Square from "./Square.jsx";
import Input from "./Input.jsx";
import { useState } from "react";

const App = () => {
  const [colorValue, setColorValue] = useState("");
  return (
    <div className="App">
      <Square colorValue={colorValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
};

export default App;
