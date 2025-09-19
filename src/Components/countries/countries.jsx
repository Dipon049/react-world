import { use } from "react";
import Country from "./Country/country";


const Countries = ({countriesPromise}) => {
      const countriesData = use (countriesPromise);
      const countries = countriesData.countries ;
    console.log(countries)

    return (

        <div>
            <h1> In the World: {countries.length} countries </h1>
            {
                countries.map( country => <Country key ={country.cca3.cca3} country = {country}></Country>)
            }
        </div>

    );
};

export default Countries;