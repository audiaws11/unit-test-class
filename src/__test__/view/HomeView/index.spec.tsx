import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HomeView from '@/view/Home';

describe('home view', () => {
  it('should handle render homepage', () => {
    const { container } = render(<HomeView />);
    expect(container).toMatchSnapshot();
  });

  it('should handle button click', () => {
    const { getAllByText } = render(<HomeView />);
    const buttons = getAllByText('submit');
    buttons.map((button) => fireEvent.click(button));
    expect(buttons).toHaveLength(1);
  });
});
