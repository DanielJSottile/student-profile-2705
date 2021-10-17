import { FunctionComponent, useState } from 'react';
import Grades from '../Grades';
import Tags from '../Tags';
import { average } from '../../utils/functions';
import { StudentData } from '../../@types';
import styles from './Student.module.css';

type StudentProps = {
  /** Object containing the information for a single student.
   * Includes company, email, firstName, grades, lastName, pic,
   * skill, id, and the added property tags.
   */
  info: StudentData;
};

const Student: FunctionComponent<StudentProps> = ({ info }) => {
  const [toggle, setToggle] = useState(false);

  const { company, email, firstName, grades, lastName, pic, skill, id, tags } =
    info;

  const averageGrade = average(grades.map((grade) => Number(grade)));

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
          <Tags tags={tags} id={id} />
        </div>
      </div>
      <button className={styles['button']} onClick={() => setToggle(!toggle)}>
        {toggle ? '-' : '+'}
      </button>
    </div>
  );
};

export default Student;
