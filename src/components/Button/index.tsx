import React from 'react';
import { Props } from './types.type';

const Button = (props: Props) => {
  const { text, onclick, isDisable } = props;
  return (
    <button disabled={isDisable} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
