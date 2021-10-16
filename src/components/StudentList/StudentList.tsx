import { useContext, FunctionComponent } from 'react';
import DataContext from '../../contexts/context';
import { StudentInformation } from '../../@types';
import Student from '../Student';

const StudentList: FunctionComponent = () => {
  const { data } = useContext(DataContext);
  const studentList = data.map((info: StudentInformation, index) => <Student key={index} info={info} />);
  return <>{studentList}</>;
};

export default StudentList;
