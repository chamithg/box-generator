import { useState } from "react";
import "./App.css";
import BoxForm from "./components/BoxForm";
import Box from "./components/Box";

function App() {
  const [boxes, setBoxes] = useState([]);

  const handleAddColor = (color, height, width) => {
    const newColors = [
      ...boxes,
      { color: color, height: height, width: width },
    ];
    setBoxes(newColors);
  };

  return (
    <div className="App">
      <BoxForm handleAddColor={handleAddColor} />
      <div className="box-gallery">
        {boxes.map((box, index) => {
          return <Box key={index} {...box} />;
        })}
      </div>
    </div>
  );
}

export default App;
