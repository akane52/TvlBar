import React from 'react';
import PropTypes from 'prop-types';
import { Image, BarName, QuoteOfTheDay } from './styles';

const FirstPagePhoto = ({ picture, quote }) => {
  return (
    <div>
      <Image src={picture} />
      <BarName>TravelBar</BarName>
      <QuoteOfTheDay>{quote}</QuoteOfTheDay>
    </div>
  );
};

FirstPagePhoto.propTypes = {
  picture: PropTypes.string,
  quote: PropTypes.string,
};

FirstPagePhoto.defaultProps = {
  picture: 'See more',
  quote: '',
};
export default FirstPagePhoto;
