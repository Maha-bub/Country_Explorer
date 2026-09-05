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
        const exist = visitedCountry.find(c => c.ccn3.ccn3 === country.ccn3.ccn3)
        if (exist) {
            const remainingCountries = visitedCountry.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3);
            setVisitedCountry(remainingCountries);
        } else {

            const newVisitedCountry = [...visitedCountry, country];
            setVisitedCountry(newVisitedCountry);
        }


    }

    const [visitedcountryfalgs, setvisitedcountryflags] = useState<string[]>([]);
    const handlerCountryFlags = (flags: string): void => {

        if (visitedcountryfalgs.includes(flags)) {
            const remainingFlags = visitedcountryfalgs.filter(f => f !== flags);
            setvisitedcountryflags(remainingFlags)
        } else {
            const newFlags = [...visitedcountryfalgs, flags];
            setvisitedcountryflags(newFlags);
        }
    }
    return (
        <>
            <div>
                <p>Countries:{country.length}</p>
                <h3>Visited Countries:{visitedCountry.length}</h3>
                <h4>Visited Flags:{visitedcountryfalgs.length}</h4>
                <div className="visited-country">
                    <ul>
                        {visitedCountry.map(country => <li>{country.name.common}</li>)}
                    </ul>
                </div>
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