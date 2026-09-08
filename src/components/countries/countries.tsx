import { use, useState } from "react";
import type { CountryType } from "../type";
import Country from "../country/country";
import "./countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

const Countries = ({ countriesPromise }: CountriesProps) => {
  const [visitedCountry, setVisitedCountry] = useState<CountryType[]>([]);
  const [visitedFalgs, setVisitedFalgs] = useState<string[]> ([])

  const visitedCountryHandeler = (country: CountryType): void => {
    // bad way to check;

    // if (visitedCountry.includes(country)) {
    //   const remainigCountries = visitedCountry.filter(c => c !== country)
    //   setVisitedCountry(remainigCountries)}

    // good way to check;
    const exicts = visitedCountry.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
    if(exicts){
      const remainigCountries = visitedCountry.filter(c => c !== country)
      setVisitedCountry(remainigCountries)
    } else {
      const newArray = [...visitedCountry, country];
      setVisitedCountry(newArray);
    }
  };
  const handleVisitedFlags = (flag:string):void=>{
    if(visitedFalgs.includes(flag)){
      const remainigFlags = visitedFalgs.filter(f=> f !==flag);
      setVisitedFalgs(remainigFlags);
    }
    else{
      const newVisitedFalgs = [...visitedFalgs, flag];
      setVisitedFalgs(newVisitedFalgs);
    }
  }

  const countries = use(countriesPromise);
  console.log(countries);
  return (
    <div>
      <h2 className="heading">Countries: {countries.length}</h2>
      <h4 className="heading">Visited Countrise: {visitedCountry.length}</h4>
      <h4 className="heading">Visited Countrise Flags: {visitedFalgs.length}</h4>
      <div className="visited-flags">
        {
          visitedFalgs.map((flag, index) => <img key={index} src={flag} alt=""/>)
        }
      </div>
      <div>
        <ul>
          {
            visitedCountry.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            visitedCountryHandeler={visitedCountryHandeler}
            handleVisitedFlags = {handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
