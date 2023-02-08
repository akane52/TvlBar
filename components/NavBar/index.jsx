import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Button, Buttons } from './styles';

const NavBar = ({ title, view }) => {
  return (
    <Header>
      <Title
        onClick={() => {
          view('main');
        }}
      >
        {title}
      </Title>
      <Buttons>
        <Button
          data-testid="btnAlcohol"
          onClick={() => {
            view('alcohol');
          }}
        >
          Alcoholic
        </Button>
        <Button
          data-testid="btnNoAlcohol"
          onClick={() => {
            view('noAlcohol');
          }}
        >
          Non alcoholic
        </Button>
      </Buttons>
    </Header>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  view: PropTypes.string,
};
NavBar.defaultProps = {
  title: '',
  view: '',
};
export default NavBar;
