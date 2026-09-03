import { use } from "react";
import type CountryType from "../type";


export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const country = use(countriesPromise);
    console.log(country);

    return (
        <>
            <p>Countries:</p>
        </>
    )
} 