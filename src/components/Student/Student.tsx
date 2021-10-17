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
  /** test id */
  testId?: string;
};

const Student: FunctionComponent<StudentProps> = ({
  info,
  testId = 'student',
}) => {
  const [toggle, setToggle] = useState(false);

  const { company, email, firstName, grades, lastName, pic, skill, id, tags } =
    info;

  const averageGrade = average(grades.map((grade) => Number(grade)));

  return (
    <div className={styles['student']} data-testid={testId}>
      <img
        data-testid={`${testId}-image`}
        className={styles['icon']}
        src={pic}
        alt={`student-${firstName}-${lastName}-${id}`}
      ></img>
      <article className={styles['student-info']}>
        <h2
          className={styles['student-name']}
          data-testid={`${testId}-name`}
        >{`${firstName} ${lastName}`}</h2>
        <div className={styles['information']} data-testid={`${testId}-info`}>
          <p data-testid={`${testId}-email`}>{`email: ${email}`}</p>
          <p data-testid={`${testId}-company`}>{`Company: ${company}`}</p>
          <p data-testid={`${testId}-skill`}>{`Skill: ${skill}`}</p>
          <p data-testid={`${testId}-average`}>{`Average: ${averageGrade}%`}</p>
          {toggle && <Grades grades={grades} />}
          <Tags tags={tags} id={id} />
        </div>
      </article>
      <button
        className={styles['button']}
        onClick={() => setToggle(!toggle)}
        data-testid={`${testId}-button`}
      >
        {toggle ? '-' : '+'}
      </button>
    </div>
  );
};

export default Student;
