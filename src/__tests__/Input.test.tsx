import { render, cleanup, fireEvent } from '@testing-library/react';
import Input from '../components/Input';
import '@testing-library/jest-dom';

describe('<Input />', () => {
  const defaultProps = {
    className: '',
    onChange: jest.fn(),
    onKeyPress: jest.fn(),
    placeholder: 'Placeholder Value',
    testId: 'jest',
  };

  afterEach(cleanup);
  const renderComponent = () => {
    return render(<Input {...defaultProps} />);
  };

  it('component renders', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest')).toBeVisible();
  });

  it('types out a string', () => {
    const { getByTestId } = renderComponent();
    const input = getByTestId('jest-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Bobby' } });
    expect(input.value).toBe('Bobby');
  });
});
