import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { StudentInformation } from '../@types';

import { getApiData } from '../services/api';

type ContextProps = {
  children: ReactNode;
};

interface DataContextValues {
  data: StudentInformation[];
  filterInput: string;
  setData: Dispatch<SetStateAction<StudentInformation[]>>;
  setFilterInput: Dispatch<SetStateAction<string>>;
  filterData: (
    input: string,
    arr: StudentInformation[]
  ) => StudentInformation[];
}

const DataContext = createContext<DataContextValues>({
  data: [],
  filterInput: '',
  setData: () => null,
  setFilterInput: () => null,
  filterData: () => [],
});

export default DataContext;

export const DataProvider = ({ children }: ContextProps): JSX.Element => {
  const [data, setData] = useState<StudentInformation[]>([]);
  const [filterInput, setFilterInput] = useState('');

  useEffect(() => {
    getApiData().then((data) => setData(data.students));
  }, []);

  const filterData = (input: string, arr: StudentInformation[]) => {
    const [first, last] = input.split(' ');
    /* may not need last...*/
    return arr.filter((student) => {
      return (
        student.firstName.toLowerCase().startsWith(first.toLowerCase()) ||
        student.lastName.toLowerCase().startsWith(first.toLowerCase())
      );
    });
  };

  const value: DataContextValues = {
    data,
    filterInput,
    setData,
    setFilterInput,
    filterData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
