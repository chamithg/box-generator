import React, { useState } from "react";

export default function BoxForm({ handleAddColor }) {
  const [inputColor, setInputColor] = useState("");
  const [inputHeight, setInputHeight] = useState("");
  const [inputWidth, setInputWidth] = useState("");

  const addColor = (e) => {
    e.preventDefault();
    const color = e.target.color.value;
    const height = e.target.height.value;
    const width = e.target.width.value;
    setInputColor("");
    setInputWidth("");
    setInputHeight("");
    return handleAddColor(color, height, width);
  };

  return (
    <div className="bg-light m-4 p-4">
      <h3>Add box</h3>
      <form onSubmit={addColor}>
        <div className="form-group">
          <label>color: </label>
          <br />
          <input
            type="text"
            onChange={(e) => setInputColor(e.target.value)}
            name="color"
            value={inputColor}
          />
        </div>
        <div className="form-group">
          <label>width: </label>
          <br />
          <input
            type="number"
            onChange={(e) => setInputWidth(e.target.value)}
            name="width"
            value={inputWidth}
          />
        </div>
        <div className="form-group">
          <label>height: </label>
          <br />
          <input
            type="number"
            onChange={(e) => setInputHeight(e.target.value)}
            name="height"
            value={inputHeight}
          />
        </div>
        <input className="btn btn-success mt-2" type="submit" value="add box" />
      </form>
    </div>
  );
}
