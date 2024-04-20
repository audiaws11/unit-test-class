import React from 'react';
import { Props } from './types.type';

const Input = (props: Props) => {
  const { label, type } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      {type === 'textarea' ? (
        <textarea name={label} id={label} />
      ) : (
        <input type={type} name={label} id={label} />
      )}
    </div>
  );
};

export default Input;
