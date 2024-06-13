import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [data, setData] = useState<number> (89);
  const [numberData, setNumberData] = useState<number>(89);
  
   const numberArray = [1,2,3,4,5,6,7,8]; 
   const people = 
   [
    {name :"KHUSRI" , age :34 , status : "active"},
    {name :"DHARYA" , age :45, status : "inactive"},
    {name :"SAHILWA" , age :67,status : "active"}

   ];
  useEffect(() => {
    
  addData();

  },[numberData]);
  const addData = ()=>{
    const oldData = data ;
    const newData = oldData+1;
    setData (newData);


  };
  const decrementData = () => {
    setNumberData ( numberData - 1);
  };
    return (

    <>
      <button title = "title" onClick  = { addData} className={'number ${data}'}>
        add Data
      </button>

        <div> {data}</div>
        <div> Increment Data : {data} </div>
        <br/>
       <button onClick = {decrementData} >decrement </button>
       <div> decremented Data : { numberData } </div>
       {numberArray.map((item ,i ) => {
        return <div key= {i}>{item}
        </div>
          
       })}

{people.map ((item ,i)=>{
        return(
          <div key ={i}>
            {item.status === "active" &&(
            <>
          <div> name: {item.name}</div>
          <div> Age: {item.age}</div>
          <br/>
          </>
            )}
            </div>
        );
      })}
      <hr/>
        
       {people.map ((item ,i)=>{
        return(
          <div key ={i}>
            {item.status === "active" ? (
            <>
          <div> name: {item.name}</div>
          <div> Age: {item.age}</div>
          <br/>
          </>
        ): (
        <>
        <div> inactive</div>
        <br/>
        </>
        )}
        </div>
        );
      })}
      </>
    );
  }


export default App
