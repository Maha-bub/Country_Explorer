import { use } from "react";
import type CountryType from "../../type";
import Country from "../../Country/Country";


export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const country = use(countriesPromise);
    console.log(country);

    return (
        <>
            <p>Countries:</p>
            <ul>
                {
                    country.map((country) => <Country country={country} ></Country>
                    )
                }
            </ul>
        </>
    )
} 