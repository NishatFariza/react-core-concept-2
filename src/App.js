import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers () {
  const [users, setUsers] = useState([]);

  /*UseEffect er majhe arrow function */
  useEffect( () => { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
   }, [])
  return (
   <div>
     <h2>External Users</h2>
     <p>{users.length}</p>
     {
       users.map(user => <User name={user.name} email={user.email}></User>)
     }
   </div>
  )
}

function User (props) {
  return (
    <div>
      <h3>Nmae: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

 function Counter (){
   const [count, setCount] = useState(70);
   const increaseCount = () => setCount(count + 1); /*Single line function */
   const decreaseCount = () => setCount(count - 1); /*Single line function */
      
   /* Multiline Function start*/ 
   /* 
     const newCount = count + 1;
        setCount(count + 1) */
   /* Multiline Function end*/ 

   /*const increaseCount = () => {
       const newCount = count + 1;
       setCount(newCount)
   }
   */
  
   /*jsx camelCase onClick function without call () */
   return (
     <div>
       <h1>Count: {count}</h1>
       <button onClick={increaseCount}>Increase</button>
       <button onClick={decreaseCount}>Decrease</button>
     </div>
   )
 }
/* array of object
 const products =[
    {name:'Laptop', price : 120000},
    {name:'Phone', price : 20000},
    {name:'Watch', price : 7000},
    {name:'Tablet', price : 700000}
  ]
*/

  /* pass dynamic similar in look different in data */
  /*
  return (
  //   <div className="App">
  //     {
  //       products.map(product => <Product name={product.name} price={product.price}></Product>)
  //     }
  //     <Product name='laptop' price='80000'></Product>
  //     <Product name='phone' price='28000'></Product>
  //     <Product name='watch' price='8000'></Product>
  //   </div>
  // );*/



function Product (props) {
    return(
      <div className='product'>
        <h3>Name: {props.name}</h3>
        <p>Price: {props.price}</p>
      </div>
    )
}

export default App;
