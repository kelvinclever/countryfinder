import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img className="country-flag" src={country.flag} alt={country.name} />
      <div className="country-details">
        <h2>{country.name}</h2>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
