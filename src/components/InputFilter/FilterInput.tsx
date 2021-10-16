import { FunctionComponent, useContext } from 'react';
import styles from './FilterInput.module.css';
import { SEARCH_BY_NAME } from '../../utils/constants';
import DataContext from '../../contexts/context';

const FilterInput: FunctionComponent = () => {
  const { filterInput, setFilterInput } = useContext(DataContext);

  return (
    <>
      <input
        className={styles['input']}
        value={filterInput}
        placeholder={SEARCH_BY_NAME}
        onChange={(e) => setFilterInput(e.target.value)}
      />
    </>
  );
};

export default FilterInput;
