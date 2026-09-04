import type CountryType from "../type"
import './Country.css'
export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return (
        <>
        <div className="country">
        <h3>Country Name:{country.name.common}</h3>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <p>Population:{country.population.population}</p>
        <p>Capital:{country.capital.capital}</p>
        </div>
        </>
    )
}