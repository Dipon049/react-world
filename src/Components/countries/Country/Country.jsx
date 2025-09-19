import React from 'react';

const country = ({country}) => {
    console.log(country.flags.flags.png)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>name: {country.name.common}</h2>
            
        </div>
    );
};

export default country;