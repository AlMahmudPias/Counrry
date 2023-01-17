import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,capital,region,flags} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='countryStyle'>
            <img src={flags.png} alt="" />
           <h2>{name.common}</h2>
           <h4>Official Name: {name.official}</h4>
           <p>Capital: {capital}</p>
           <p>Population: {population}</p>
           <p>Region: {region}</p>
           <button onClick={() => handleAddCountry(props.country)}>Add Country</button>

           
           
        </div>
    );
};

export default Country;