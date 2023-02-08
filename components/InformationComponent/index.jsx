import React from 'react';
import PropTypes from 'prop-types';
import { Title, InformationSquare, PurpleSquare, BarPicture, Information, Picture } from './styles';

const TravelBarInformation = ({ picture }) => {
  return (
    <div>
      <Title>¿What&apos;s TravelBar?</Title>
      <Information>
        <PurpleSquare>
          <InformationSquare>
            Set within a historic 17th century Spanish house in Central Barcelona.
            <br />A casual cocktail bar offering kick ass cocktails, beers, wine and bites late into
            the night. The playful sibling in the family uses all the experience across our history
            to create expanded versions of familiar serves, alongside some unexpected gems.
            <br />A bar where you can dance, play board games, listen to music... We also have
            karaoke and open mic nights where you can get to know new talents.
            <br />
            Your kids are more than welcomed here. We have cocktails without alcohol just for them.
            <br />
            <br />
            Just come and have fun!!
          </InformationSquare>
        </PurpleSquare>
        <Picture>
          <BarPicture src={picture} />
        </Picture>
      </Information>
    </div>
  );
};
TravelBarInformation.propTypes = {
  picture: PropTypes.string,
};
TravelBarInformation.defaultProps = {
  picture: '',
};
export default TravelBarInformation;
