import { render, within, cleanup } from '@testing-library/react';
import Tags from '../components/Tags';
import '@testing-library/jest-dom';

describe('<Tags />', () => {
  const tags = ['tag1', 'tag2', 'tag3'];
  const id = '1';
  afterEach(cleanup);
  const renderComponent = () => {
    return render(<Tags tags={tags} id={id} testId="jest" />);
  };

  it('component renders', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('jest')).toBeVisible();
  });

  it('taglist contains tags', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('jest');
    const innerTags = within(component).getAllByTestId('tag');
    expect(innerTags.length).toBe(3);
  });

  it('has the proper text within each tag', () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId('jest');
    const innerTags = within(component).getAllByTestId('tag');
    innerTags.forEach((tag, index) =>
      expect(tag).toHaveTextContent(`${tags[index]}`)
    );
  });
});
