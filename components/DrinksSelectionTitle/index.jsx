import React from 'react';
import PropTypes from 'prop-types';
import { SelectionTitle } from './styles';

const DrinksSelectionTitle = ({ textTitle }) => {
  return <SelectionTitle data-testid="selection">{textTitle}</SelectionTitle>;
};

DrinksSelectionTitle.propTypes = {
  textTitle: PropTypes.string,
};
DrinksSelectionTitle.defaultProps = {
  textTitle: '',
};
export default DrinksSelectionTitle;
