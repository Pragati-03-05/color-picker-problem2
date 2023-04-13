import React, { useState, useEffect } from 'react';
export const Pixel = ({ color }) => {
  const [pixelColor, setPixelColor] = useState('lightgrey');
  const [count, setCount] = useState(0);
  console.log('BBBBBBBBBBBB', pixelColor, color);
  return (
    <div
      style={{ width: '20px', height: '20px', backgroundColor: pixelColor }}
      key={pixelColor}
      onClick={() => {
        setPixelColor(color);
      }}
    />
  );
};
