import { use, useState } from "react";
import type CountryType from "../../type";
import Country from "../../Country/Country";
import './Countries.css'


export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const country = use(countriesPromise);
    console.log(country);
    const [visitedCountry, setVisitedCountry] = useState<CountryType[]>([]);
    const handleVisitedConutry = (country: CountryType): void => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);


    }

    const [visitedcountryfalgs, setvisitedcountryflags] = useState<string[]>([]);
    const handlerCountryFlags = (flags: string) => {
        const newFlags = [...visitedcountryfalgs, flags];
        setvisitedcountryflags(newFlags);
    }
    return (
        <>
            <div>
                <p>Countries:{country.length}</p>
                <h3>Visited Countries:{visitedCountry.length}</h3>
                <div className="countries">

                    {
                        country.map((country, idx) => <Country
                            key={idx}
                            country={country}
                            handleVisitedConutry={handleVisitedConutry}
                            handlerCountryFlags={handlerCountryFlags}
                        ></Country>
                        )
                    }

                </div>
            </div>
        </>
    )
} 