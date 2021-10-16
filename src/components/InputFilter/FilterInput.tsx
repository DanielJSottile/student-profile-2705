import { FunctionComponent, useState } from "react";
import styles from './FilterInput.module.css';
import { SEARCH_BY_NAME } from "../../utils/constants";

const FilterInput: FunctionComponent = () => {

  const [input, setInput] = useState('');

  return <>
  <input className={styles['input']} value={input} placeholder={SEARCH_BY_NAME} onChange={(e) => setInput(e.target.value)}/>
  </>;
}

export default FilterInput
