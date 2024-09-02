1.
import React from 'react';
function alertMsg(){
    alert("Message from Javascript Alert!");
    console.log("Message to developer");
}
 const Ce = () =>{
    return(
<div>
    <h1>Let we see the output of JAVASCRIPT</h1>
    <button onClick={alertMsg}>Button</button>
</div>
    );
 };
 export default Ce;

2.
import React from 'react';
function AlertMsg()
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="chennai";
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myobject);
    console.log(newObject);
    console.log(vowelArray);
    alert("Check the console output!");
}
const Hello=()=>
{
    return(
        <div>
         <h1>Reference Data Types use same memory</h1>
         <button onClick={AlertMsg}>Reference Data Types and call the function</button>
        </div>
    );
};
export default Hello;
