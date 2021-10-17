import { render, within, cleanup } from '@testing-library/react';
import Grades from '../components/Grades';
import '@testing-library/jest-dom';

describe('<Grades />', () => {
  const grades = ['10', '11', '12', '99', '100'];
  afterEach(cleanup);
  const renderComponent = () => {
    return render(<Grades testId="jest" grades={grades} />);
  };

  it('component renders', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest')).toBeVisible();
  });

  it('contains a list of grades', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('jest');
    const innerGrades = within(component).getAllByTestId('grade');
    expect(innerGrades.length).toBe(5);
  });

  it('has the proper text within each grade', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('jest');
    const innerGrades = within(component).getAllByTestId('grade');
    innerGrades.forEach((grade, index) =>
      expect(grade).toHaveTextContent(
        `Test ${index + 1}: ${Number(grades[index])}%`
      )
    );
  });
});
