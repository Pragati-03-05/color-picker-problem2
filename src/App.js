import React, { useState, useEffect } from 'react';
import { Pixel } from './Pixel';
import './style.css';

export default function App() {
  const [color, setColor] = useState('lightGrey');

  const colorSet = (col) => {
    setColor(col ? col : 'lightGrey');
  };
  let pixels = [];
  for (let i = 0; i < 100; i++) {
    pixels.push(<Pixel color={color} />);
  }
  const colorCodes = [
    'red',
    'yellow',
    'green',
    'blue',
    'pink',
    'orange',
    'skyblue',
    'black',
  ];
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10,1fr)',
          gridTemplateRows: 'repeat(10,1fr)',
          gridGap: '10px',
          width: '200px',
        }}
      >
        {pixels}
      </div>
      <p>Select color</p>
      {colorCodes.map((col) => {
        return (
          <button
            onClick={(e) => colorSet(col)}
            style={{
              backgroundColor: col,
              border: 'none',
              height: '20px',
              width: '20px',
            }}
          ></button>
        );
      })}
    </div>
  );
}
