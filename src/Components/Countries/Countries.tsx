import { use } from "react";
import type CountryType from "../../type";
import Country from "../../Country/Country";
import './Countries.css'


export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const country = use(countriesPromise);
    console.log(country);

    return (
        <>
            <div>
                <p>Countries:{country.length}</p>
                <div className="countries">

                    {
                        country.map((country, idx) => <Country key={idx} country={country} ></Country>
                        )
                    }

                </div>
            </div>
        </>
    )
} 