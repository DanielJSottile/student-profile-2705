import { FunctionComponent, useState, useContext, ChangeEvent, KeyboardEvent } from 'react';
import DataContext from '../../contexts/context';
import Grades from '../Grades';
import Input from '../Input';
import { average } from '../../utils/functions';
import { StudentData } from '../../@types';
import styles from './Student.module.css';
import { ADD_A_TAG } from '../../utils/constants';

type StudentProps = {
  /** id for folder*/
  info: StudentData;
};

const Student: FunctionComponent<StudentProps> = ({ info }) => {
  const {addTag} = useContext(DataContext);
  const [toggle, setToggle] = useState(false);
  const [tagInput, setAddTagInput] = useState('');

  const { company, email, firstName, grades, lastName, pic, skill, id, tags } =
    info;

  const averageGrade = average(grades.map((grade) => Number(grade)));
  const tagList = tags.map((tag, index) => (<span key={index} className={styles['tag']}>{tag}</span>))

  return (
    <div className={styles['student']}>
      <img
        className={styles['icon']}
        src={pic}
        alt={`student ${firstName} ${lastName}`}
      ></img>
      <div className={styles['student-info']}>
        <h2 className={styles['student-name']}>{`${firstName} ${lastName}`}</h2>
        <div className={styles['information']}>
          <p>{`email: ${email}`}</p>
          <p>{`Company: ${company}`}</p>
          <p>{`Skill: ${skill}`}</p>
          <p>{`Average: ${averageGrade}%`}</p>
          {toggle && <Grades grades={grades} />}
          {!!tagList.length && (
            <div className={styles['tag-list']}>
            {tagList}
          </div>
          )}
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
        </div>
      </div>
      <button className={styles['button']} onClick={() => setToggle(!toggle)}>
        {toggle ? '-' : '+'}
      </button>
    </div>
  );
};

export default Student;
