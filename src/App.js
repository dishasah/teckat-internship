import logo from './logo.svg';
import './App.css';

function App() {
  /*onst student1 = {
    name: "disha",
    age: "20",
    address: "JAMSHEDPUR"

  };
  const student2 = {
    name: "disha",
    roll: "20",
    address: "patna"
  }
  const fun1 =() => {
    const num1 =1;
    const num2 =2;
    const sum = num1 + num2;
    console.log(sum);
  };
  if(student1.name===student2.name){
  fun1();}
  else {
  }
  

const arr1 = [1,2,3,4,5,6]

for (let item of arr1){
  console.log(item);
}*/
//const people  = [
  //{ name: "disha" ,age : 19 },
  //{ name: "aahana" , age : 18 },
//];
//const employees = [
 // { name: "disha" ,age : 19 ,salary : 30000},
  //{ name: "aahana" , age : 18 , salary : 10000 },
//];
//const mappedEmployees = employees.map((item) =>  {
  //return {
    //item,
    //salary:item.salary + 100,
  //};
//},[]);
//console.log("employees",employees);
//
//console.log("mappedEmployees",mappedEmployees);


//for ( let person of people ) {
  //console.log(`Name:${person.name} ,age:${person.age}`);

//}
//people.forEach((person) => {
 // console.log(`Name:${person.name} ,age:${person.age}`);
//});
  //const employee = {
    //name : "Sahil",
    //age: 99,
   // occupation : "chaprasi",
  //};
  //console.log(employee.name); 
  const products = [

    {id:1001 , name : "mota",price:20, category :"gawar"},
    {id:1002 , name : "chotha",price:30, category :"mahagawar"},
    {id:1003 , name : "pari",price:70, category :"gawar"},
    {id:1004 , name : "mota",price:80, category :"ultrapromaxgawar"},
  ];
  const filteredProducts = products.filter((item) => {
    return item.category === "gawar" ;

  });
  console.log("filteredProducts" , filteredProducts);
  const foundProducts = products.find((item) => {
    return item.id === 1002 ; 
    });
    console.log("foundProducts" , foundProducts);
  

   
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
