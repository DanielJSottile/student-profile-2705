import { FunctionComponent } from 'react';
import {average} from '../../utils/functions';
import {StudentInformation} from '../../@types';
import styles from './Student.module.css';

type StudentProps = {
  /** id for folder*/
  info: StudentInformation;
};

const Student: FunctionComponent<StudentProps> = ({ info }) => {
  const { company, email, firstName, grades, lastName, pic, skill } =
    info;
  
  const averageGrade = average(grades.map(grade => Number(grade)));

  return (
    <div className={styles['student']}>
      <img className={styles['icon']} src={pic} alt={`student ${firstName} ${lastName}`}></img>
      <div className={styles['student-info']}>
        <h2>{`${firstName} ${lastName}`}</h2>
        <div className={styles['information']}>
          <p>{`email: ${email}`}</p>
          <p>{`Company: ${company}`}</p>
          <p>{`Skill: ${skill}`}</p>
          <p>{`Average: ${averageGrade}`}</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Student;
