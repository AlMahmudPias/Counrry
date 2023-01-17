import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])
  const handleAddCountry =(country) => {
    const newCart = [...cart, country];
    setCart(newCart);
    }
  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.ccn3}></Country>)
        }
      </ul>
  
      
    </div>
  );
}

export default App;
