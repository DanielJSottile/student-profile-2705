import { useContext, ChangeEvent } from 'react';
import StudentList from './components/StudentList';
import Input from './components/Input/Input';
import DataContext from './contexts/DataContext';
import { SEARCH_BY_NAME, SEARCH_BY_TAG } from './utils/constants';

const App = () => {
  const { filterInput, setFilterInput, tagInput, setTagInput } =
    useContext(DataContext);

  return (
    <>
      <Input
        value={filterInput}
        placeholder={SEARCH_BY_NAME}
        onChangeCallback={(e: ChangeEvent<HTMLInputElement>) =>
          setFilterInput(e.target.value)
        }
      />
      <Input
        value={tagInput}
        placeholder={SEARCH_BY_TAG}
        onChangeCallback={(e: ChangeEvent<HTMLInputElement>) =>
          setTagInput(e.target.value)
        }
      />
      <StudentList />
    </>
  );
};

export default App;
