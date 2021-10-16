import { FunctionComponent } from 'react';
import {average} from '../../utils/functions';
import {StudentInformation} from '../../@types';

type StudentProps = {
  /** id for folder*/
  info: StudentInformation;
};

const Student: FunctionComponent<StudentProps> = ({ info }) => {
  const { company, email, firstName, grades, lastName, pic, skill } =
    info;
  
  const averageGrade = average(grades.map(grade => Number(grade)));

  return (
    <>
      <img src={pic} alt={`student ${firstName} ${lastName}`}></img>
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{`email: ${email}`}</p>
      <p>{`Company: ${company}`}</p>
      <p>{`Skill: ${skill}`}</p>
      <p>{`Average: ${averageGrade}`}</p>
    </>
  );
};

export default Student;
