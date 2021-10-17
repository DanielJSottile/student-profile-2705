import { useContext, FunctionComponent } from 'react';
import DataContext from '../../contexts/context';
import { StudentData } from '../../@types';
import Student from '../Student';

const StudentList: FunctionComponent = () => {
  const { data, filterData, filterInput, tagInput } = useContext(DataContext);

  const studentList = filterData(filterInput, tagInput, data).map((info: StudentData, index) => <Student key={index} info={info} />);
  return <>{studentList}</>;
};

export default StudentList;
