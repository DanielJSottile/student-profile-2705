import { render, cleanup } from '@testing-library/react';
import Student from '../components/Student';
import '@testing-library/jest-dom';

describe('<Student />', () => {
  const info = {
    city: 'Fushë-Muhurr',
    company: 'Yadel',
    email: 'iorton0@imdb.com',
    firstName: 'Ingaberg',
    grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
    id: '1',
    lastName: 'Orton',
    pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
    skill: 'Oracle',
    tags: [],
  };
  afterEach(cleanup);
  const renderComponent = () => {
    return render(<Student info={info} testId="jest" />);
  };

  it('component renders', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest')).toBeVisible();
  });

  it('image has correct src', () => {
    const { getByAltText } = renderComponent();
    const image = getByAltText(
      `student-${info.firstName}-${info.lastName}-${info.id}`
    ) as HTMLImageElement;
    expect(image.src).toContain(`${info.pic}`);
  });

  it('displays the correct name', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest-name')).toHaveTextContent(
      `${info.firstName} ${info.lastName}`
    );
  });

  it('email, company, and skill display correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest-email')).toHaveTextContent(`email: ${info.email}`);
    expect(getByTestId('jest-company')).toHaveTextContent(
      `Company: ${info.company}`
    );
    expect(getByTestId('jest-skill')).toHaveTextContent(`Skill: ${info.skill}`);
  });

  it('average displays correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest-average')).toHaveTextContent('Average: 88.875%');
  });
});
