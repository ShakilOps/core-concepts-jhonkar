import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = [ 'Tonni', 'Prithi', 'Simran']
  const products = [
    {name : 'photoshop', price: '$99.99'}, 
    {name: 'illustrator', price : '$50.00'},
    {name : 'premiere', price : '$240.00'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
        <Person name = {nayoks[0]} nayika = 'Zeba'></Person>
        <Person name = 'Mithi' nayika = 'Mumu'></Person>
        <Person name = 'Asmany' nayika = 'Oishi'></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  //curly bracket er por empty array deyate reapiting bondho hye jabe
  //useEffect ta hsse js er kisu na ,eta hsse server er ...jeta server theke data ene load korbe effect dbe
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          //console.log(users)
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  //const handleIncrease = () => setCount(count + 1);
    //const newCount = count + 1;
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      {/* <button onClick = {handleIncrease}>Increase</button> */}
    </div>
  )
}

function Person(props){
  const personStyle = {
    border : '2px solid red',
    margin : 'red',
    padding : '20px'
  }
  return(
    // <div style = {{border : '2px solid yellow', margin:'10px'}}>
    //dynamically call korte hole single curly bracket r static hole seta double curly bracket
    <div style = {personStyle}>
      <h1>Name : {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  );
}

  function Product(props){
    const productStyle = {
      border : '2px solid gray',
      borderRadius : '5px',
      backgroundColor : 'lightgray',
      height : '200px',
      width : '200px',
      float : 'left'
    }
    const {name, price} = props.product;
    console.log(name, price)
    //uporer dui line ke bola hoy destructure kora ...er fole props.product.name call na kore sudhu name call korlei hbe
    return(
      <div style = {productStyle}>
        <h3>{props.product.name}</h3>
        <h5>{props.product.price}</h5>
        <button>Buy now</button>
      </div>
    )
  }

export default App;

//dynamically call korte hole must single curly bracket use korte hbe
