import React from "react";

export default function Box(box) {
  console.log(box);
  const { height, width, color } = box;
  console.log(height);
  console.log(width);
  console.log(color);

  return (
    <div
      className="box"
      style={{
        backgroundColor: color,
        height: parseInt(height),
        width: parseInt(width),
      }}></div>
  );
}
