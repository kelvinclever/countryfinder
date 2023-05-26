import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
          <CountryCard country={country} />
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
