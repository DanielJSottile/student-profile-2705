import { FunctionComponent } from 'react';
import styles from './Grades.module.css';

type GradeProps = {
  /** student grades in an array of strings */
  grades: string[];
  /** test id */
  testId?: string;
};

const Grades: FunctionComponent<GradeProps> = ({
  grades,
  testId = 'grade-list',
}) => {
  const gradeList = grades.map((grade, index) => (
    <p key={index} data-testid={'grade'}>{`Test ${index + 1}: ${Number(
      grade
    )}%`}</p>
  ));
  return (
    <div className={styles['container']} data-testid={testId}>
      {gradeList}
    </div>
  );
};

export default Grades;
