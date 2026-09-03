import type CountryType from "../type"
import './Country.css'
export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return (
        <>
        <h3 className="country">{country.name.common}</h3>
        </>
    )
}