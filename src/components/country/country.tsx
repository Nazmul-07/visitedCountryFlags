import { useState } from "react"
import type { CountryType } from "../type"
import './country.css'

export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {

    const [visited, setVisited] = useState<boolean> (false);

    const handleVisited = ()=>{
        visited? setVisited(false) : setVisited(true);
        
    }
    
    return (
        <div className={`country ${visited? 'country-visited': ''}`}>
            <h2>{country.name.common} <p className="visited">{visited? "(Visited)": ""}</p> </h2>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p className="text">Capital: {country.capital.capital}</p>
            <p className="text">Population: {country.population.population} </p>
            <button className="btn" onClick={handleVisited}>{
                visited? "Unmark" : "Mark as visited"
            }</button>
        </div>
    )
}