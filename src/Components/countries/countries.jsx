import { use, useState } from "react";
import Country from "./Country/country";
import './Countries.css' ;


const Countries = ({countriesPromise}) => {
      const [visitedCountries, setVisitedCountries] = useState ([]);

       const handleVisitedCountries = (country) => {
        console.log('clicked visited countries', country);
        const newVisitedCountries = [... visitedCountries , country];
        setVisitedCountries (newVisitedCountries);
       }

      const countriesData = use (countriesPromise);
      const countries = countriesData.countries ;
    console.log(countries)

    return (

        <div >
            <h1> In the World: {countries.length} countries </h1>
            <h2>Total Visited State: {visitedCountries.length} </h2>
            <ol>
                {
                    visitedCountries.map (country => 
                         <li> {country.name.common} </li> )
                }
            </ol>
            <div className="countries">

            {
                countries.map( country => <Country key ={country.cca3.cca3} 
                    handleVisitedCountries = {handleVisitedCountries}
                    country = {country}></Country>)
            }
            </div>
        </div>

    );
};

export default Countries;