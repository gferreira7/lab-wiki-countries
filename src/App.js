import logo from './logo.svg';
import './App.css';

import countriesJSON from './countries.json';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState(null);
  const [showCountryDetails, setShowCountryDetails] = useState(false);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data));
      console.log(countries)
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          {countries && <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CountriesList
              setShowCountryDetails={setShowCountryDetails}
              showCountryDetails={showCountryDetails}
              countries={countries}
            />
            <Routes>
              <Route
                path="/:id"
                element={
                  <CountryDetails
                    setShowCountryDetails={setShowCountryDetails}
                    countries={countries}
                  />
                }
              />
            </Routes>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
