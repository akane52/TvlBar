import React from 'react';
import PropTypes from 'prop-types';
import CocktailCards from '../CocktailCardComponent';
import { SelectionList, DrinkItem } from './styles';

const SelectionOfCocktails = ({ list }) => {
  return (
    <SelectionList>
      {list.map((item) => {
        return (
          <DrinkItem key={item.idDrink}>
            <CocktailCards picture={item.strDrinkThumb} title={item.strDrink} />
          </DrinkItem>
        );
      })}
    </SelectionList>
  );
};

SelectionOfCocktails.propTypes = {
  list: PropTypes.arrayOf,
};
SelectionOfCocktails.defaultProps = {
  list: [],
};
export default SelectionOfCocktails;
