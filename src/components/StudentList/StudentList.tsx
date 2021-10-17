import { useContext, FunctionComponent } from 'react';
import Student from '../Student';
import DataContext from '../../contexts/context';
import { StudentData } from '../../@types';

type StudentListProps = {
  /** test id */
  testId?: string;
};

const StudentList: FunctionComponent<StudentListProps> = ({
  testId = 'student-list',
}) => {
  const { data, filterData, filterInput, tagInput } = useContext(DataContext);

  const studentList = filterData(filterInput, tagInput, data)?.map(
    (info: StudentData) => <Student key={info.id} info={info} />
  );
  return <div data-testid={testId}>{studentList}</div>;
};

export default StudentList;
