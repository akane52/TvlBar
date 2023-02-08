import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FirstPagePhoto from '../FirstPagePhoto';
import TravelBarInformation from '../InformationComponent';
import DrinksSelectionTitle from '../DrinksSelectionTitle';
import SelectionOfCocktails from '../SelectionOfCocktail';
import Button from '../Button';
import { mainContainer } from './styles';

const MainPage = ({ dataDrinks, setSee }) => {
  const [dataQuote, setDataQuote] = useState(null);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => setDataQuote(data));
  }, [setDataQuote]);

  return (
    <mainContainer>
      {!dataQuote ? (
        <p>oops...something went wrong </p>
      ) : (
        <FirstPagePhoto
          picture="https://superlyan.com/media/pages/home/0fd2fb2358-1668517003/picture2-x1400-q100.jpg"
          quote={dataQuote[Math.floor(Math.random() * 1400)].text}
        />
      )}
      <TravelBarInformation picture="http://amsterdamshots.nl/wp-content/uploads/2019/11/image2-1-1-768x1024.jpeg" />
      <DrinksSelectionTitle textTitle="Selection of Cocktails" />
      {!dataDrinks ? (
        <p>oops...something went wrong</p>
      ) : (
        <SelectionOfCocktails list={dataDrinks.drinks.slice(70, 80)} />
      )}
      <Button text="See More" state={setSee} more="all" />
    </mainContainer>
  );
};

MainPage.propTypes = {
  dataDrinks: PropTypes.arrayOf,
  setSee: PropTypes.func,
};
MainPage.defaultProps = {
  dataDrinks: null,
  setSee: null,
};
export default MainPage;
