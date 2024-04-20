import Input from '@/components/Input';
import { render } from '@testing-library/react';

describe('input component', () => {
  it('should handle render input textarea', () => {
    const { container } = render(<Input type="textarea" label="test" />);
    expect(container).toMatchSnapshot();
  });

  it('should handle render input text', () => {
    const { container } = render(<Input type="text" label="test" />);
    expect(container).toMatchSnapshot();
  });
});
