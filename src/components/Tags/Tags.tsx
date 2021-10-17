import {
  FunctionComponent,
  useState,
  useContext,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import Input from '../Input';
import DataContext from '../../contexts/context';
import { ADD_A_TAG } from '../../utils/constants';
import styles from './Tags.module.css';

type TagsProps = {
  /** added tags as an array of strings */
  tags: string[];
  /** id of student as a string */
  id: string;
};

const Tags: FunctionComponent<TagsProps> = ({ tags, id }) => {
  const { addTag } = useContext(DataContext);
  const [tagInput, setAddTagInput] = useState('');

  const tagList = tags.map((tag, index) => (
    <span key={index} className={styles['tag']}>
      {tag}
    </span>
  ));
  return (
    <>
      {!!tagList.length && <div className={styles['tag-list']}>{tagList}</div>}
      <Input
        className={styles['add-tag-input']}
        placeholder={ADD_A_TAG}
        value={tagInput}
        onChangeCallback={(e: ChangeEvent<HTMLInputElement>) =>
          setAddTagInput(e.target.value)
        }
        onKeyDownCallback={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            addTag(tagInput, Number(id));
            setAddTagInput('');
          }
        }}
      />
    </>
  );
};

export default Tags;
