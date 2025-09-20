import React, { useState } from 'react';
import './Country.css' ;

const country = ({country,handleVisitedCountries }) => {

    const [visited, setVisited] = useState (false);
   // console.log(country.flags.flags.png)

    const handleVisited = () => {
        //setVisited (true);
        setVisited(visited ? false: true);
        handleVisitedCountries (country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name:  {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 200000 ? "(Large country)" : "(Smaller Country)"}</p>
            <button onClick={handleVisited}> 
                { visited ? 'visited' : 'not visited' }

            </button>
            
        </div>
    );
};

export default country;