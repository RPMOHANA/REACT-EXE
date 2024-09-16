1.
import React from "react";
function r()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"};
    const object2={name:"Kabil"};
    console.log(name1===name2);
    console.log(object1===object2);
    console.log(name1===object1);
};
const CY =()=>
{
    return(
        <div>
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={r}>DAY1 CY1</button>      
        </div>
    );
};
export default CY;

2.
import React, { useState } from 'react';

const ArrayManipulation = () => {
  const [array, setArray] = useState(['North', 'South', 'East', 'West']);

  const handleArrayButtonClick = () => {
    const newArray = array.map(element => '$ {element} News');
    setArray(newArray);
  };

  const handleRefreshArrayButtonClick = () => {
    const joinedString = array.join(', ');
    setArray([joinedString]);
  };

  return (
    <div>
      <h1>Array Manipulation</h1>
      <div>
        <button onClick={handleArrayButtonClick}>Array</button>
        <button onClick={handleRefreshArrayButtonClick}>Refresh Array</button>
      </div>
      <div>
        <h2>Array Elements:</h2>
        <ul>
          {array.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrayManipulation;
