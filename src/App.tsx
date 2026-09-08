import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './components/type';
import Countries from './components/countries/countries';

const countriesPromise = async ():Promise<CountryType[]> =>{
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data =await res.json();
  return data.countries;
}

function App() {

  return (
    <>
    <h2 className='heading mainhead'>Nazmul on the goo...</h2>
    <Suspense fallback = {<div className='loading'>Data Loading.......</div>} >
    <Countries countriesPromise={countriesPromise()} ></Countries>
    </Suspense>
    </>
  )
}

export default App
