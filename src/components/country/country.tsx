import { useState } from "react"
import type { CountryType } from "../type"
import './country.css'

export interface CountryProps {
    country: CountryType
    visitedCountryHandeler : (country: CountryType)=> void;
    handleVisitedFlags: (flag: string) => void; 
}

export default function Country({ country, visitedCountryHandeler, handleVisitedFlags }: CountryProps) {

    const [visited, setVisited] = useState<boolean> (false);
    const [visitedFalg,setVisitedFalg] = useState<boolean> (false);

    const handleVisited = ()=>{
        // visited? setVisited(false) : setVisited(true);
        setVisited(!visited);
        visitedCountryHandeler(country);
    }
    const handleVisitedFlag = ()=>{
        setVisitedFalg(!visitedFalg);
        handleVisitedFlags(country.flags.flags.png)
    } ;
    
    return (
        <div className={`country ${visited? 'country-visited': ''}`}>
            <h2>{country.name.common} <p className="visited">{visited? "(Visited)": ""}</p> </h2>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p className="text">Capital: {country.capital.capital}</p>
            <p className="text">Population: {country.population.population} </p>
            <button className="btn" onClick={handleVisited}>{
                visited? "Unmark" : "Mark as visited"
            }</button>
            <button className="btn" onClick={handleVisitedFlag} >{
                visitedFalg? "Unsave" : "Save as a visited"
            }</button>
        </div>
    )
}