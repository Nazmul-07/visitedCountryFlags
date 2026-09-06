import { use } from "react";
import type { CountryType } from "../type";
import Country from "../country/country";
import './countries.css'

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

const Countries = ({ countriesPromise }: CountriesProps) => {
  const countries = use(countriesPromise);
  console.log(countries);
  return (
    <div>
      <h2 className="heading">Countries: {countries.length}</h2>
      <div className="countries">
        {
            countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;
