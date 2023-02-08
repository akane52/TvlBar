import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import MainPage from '../MainPage';

export const TravelBar = () => {
  const [dataDrinks, setDataDrinks] = useState();
  const [see, setSee] = useState('main');

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((data) => setDataDrinks(data));
  }, [setDataDrinks]);

  return (
    <div>
      <NavBar title="TravelBar" view={setSee} />
      {see === 'main' ? (
        <MainPage dataDrinks={dataDrinks} setSee={setSee} />
      ) : (
        <p data-testid="errorMessage">oops...something went wrong</p>
      )}
    </div>
  );
};
