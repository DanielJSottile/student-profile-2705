import { useContext, FunctionComponent } from 'react';
import Student from '../Student';
import DataContext from '../../contexts/context';
import { StudentData } from '../../@types';


const StudentList: FunctionComponent = () => {
  const { data, filterData, filterInput, tagInput } = useContext(DataContext);

  const studentList = filterData(filterInput, tagInput, data).map((info: StudentData) => <Student key={info.id} info={info} />);
  return <>{studentList}</>;
};

export default StudentList;
