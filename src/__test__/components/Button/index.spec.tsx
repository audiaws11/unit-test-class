import React from 'react';
import { render } from '@testing-library/react';
import Button from '@/components/Button';

describe('button component', () => {
  it('should handle render button not disable', () => {
    const { container } = render(
      <Button text={'button'} onclick={() => alert('hello world')} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should handle render button disable', () => {
    const { container } = render(
      <Button isDisable text={'button'} onclick={() => alert('hello world')} />
    );
    expect(container).toMatchSnapshot();
  });
});
