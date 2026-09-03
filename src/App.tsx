import './App.css'
import type CountryType from './type';


const countriesPromise = async (): Promise<CountryType[]> => {

  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;

}
function App() {


  return (
    <>
      <section id="center">

        <div>
          <h1>Get started</h1>

        </div>

      </section>

    </>
  )
}

export default App
