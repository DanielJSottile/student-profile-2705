import { render, within, cleanup, waitFor } from '@testing-library/react';
import StudentList from '../components/StudentList';
import '@testing-library/jest-dom';
import DataContext from '../contexts/context';

describe('<StudentList />', () => {

  const defaultValues = {
    data: [
      {
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
      }
    ],
    filterInput: '',
    tagInput: '',
    setData: jest.fn(),
    setFilterInput: jest.fn(),
    setTagInput: jest.fn(),
    filterData: jest.fn(),
    addTag: jest.fn()
  }

  afterEach(cleanup);
  const renderComponent = () => {
    return render(<DataContext.Provider value={defaultValues}><StudentList testId="jest" /></DataContext.Provider>);
  };

  it('component renders', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest')).toBeVisible();
  });

  it('student list contains Students', () => {
    const { getByTestId } = renderComponent();
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      const component = getByTestId('jest');
      const studentsInComp = within(component).getAllByTestId('student');
      expect(studentsInComp.length).toBe(1);
    })
    
  })
});
