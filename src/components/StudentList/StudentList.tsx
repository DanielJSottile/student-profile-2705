import { useContext, FunctionComponent } from 'react';
import DataContext from '../../contexts/context';
import { StudentInformation } from '../../@types';
import styles from './StudentList.module.css';
import Student from '../Student';

const StudentList: FunctionComponent = () => {
  const { data } = useContext(DataContext);
  const studentList = data.map((info: StudentInformation, index) => <Student key={index} info={info} />);
  return <div className={styles['student-list']}>{studentList}</div>;
};

export default StudentList;
