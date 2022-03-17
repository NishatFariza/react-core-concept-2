import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:'Laptop', price : 120000},
    {name:'Phone', price : 20000},
    {name:'Watch', price : 7000},
    {name:'Tablet', price : 700000}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name='laptop' price='80000'></Product>
      <Product name='phone' price='28000'></Product>
      <Product name='watch' price='8000'></Product> */}
    </div>
  );
}


function Product (props) {
    return(
      <div className='product'>
        <h3>Name: {props.name}</h3>
        <p>Price: {props.price}</p>
      </div>
    )
}

export default App;
