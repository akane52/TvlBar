import React from 'react';
import PropTypes from 'prop-types';
import { BtnStyle } from './styles';

const Button = ({ text, state, more }) => {
  return (
    <BtnStyle
      data-testid="btn"
      onClick={() => {
        state(more);
      }}
    >
      {text}
    </BtnStyle>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  state: PropTypes.func,
  more: PropTypes.string,
};

Button.defaultProps = {
  text: 'See more',
  state: null,
  more: '',
};

export default Button;
