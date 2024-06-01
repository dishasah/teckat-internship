import logo from './logo.svg';
import './App.css';

function App() {
  const student1 = {
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
