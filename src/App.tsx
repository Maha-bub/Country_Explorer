import { Suspense } from 'react';
import './App.css'
import type CountryType from './type';
import Countries from './Components/Countries/Countries';


const countriesPromise = async (): Promise<CountryType[]> => {

  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;

}
function App() {


  return (
    <>

      <h1>Explore Countries</h1>
      <Suspense fallback={<p>Loading countries data....</p>}>

        <Countries countriesPromise={countriesPromise()}  ></Countries>
      </Suspense>


    </>
  )
}

export default App
