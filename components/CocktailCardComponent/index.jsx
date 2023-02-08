import React from 'react';
import PropTypes from 'prop-types';
import { Container, CocktailPicture, CocktailTitle } from './styles';

const CocktailCards = ({ picture, title }) => {
  return (
    <Container>
      <CocktailPicture src={picture} alt="noImage" data-testid="cocktailPicture" />
      <CocktailTitle data-testid="cocktailTitle" title="noText">
        {title}
      </CocktailTitle>
    </Container>
  );
};

CocktailCards.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
};
CocktailCards.defaultProps = {
  picture: '',
  title: '',
};
export default CocktailCards;
