import { FunctionComponent } from 'react';
import styles from './Grades.module.css';
type GradeProps = {
  grades: string[];
};

const Grades: FunctionComponent<GradeProps> = ({ grades }) => {
  const gradeList = grades.map((grade, index) => (
    <p>{`Test ${index + 1}: ${Number(grade)}%`}</p>
  ));
  return <div className={styles['container']}>{gradeList}</div>;
};

export default Grades;
