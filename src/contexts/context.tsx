import {
  useState,
  useMemo,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { StudentData, StudentInformation } from '../@types';
import { nameContainsSubstring, arrayContainsSubstring } from '../utils/functions';
import { getApiData } from '../services/api';

type ContextProps = {
  /** React nodes as children */
  children: ReactNode;
};

interface DataContextValues {
  data: StudentData[];
  filterInput: string;
  tagInput: string;
  setData: Dispatch<SetStateAction<StudentData[]>>;
  setFilterInput: Dispatch<SetStateAction<string>>;
  setTagInput: Dispatch<SetStateAction<string>>;
  filterData: (
    filterInput: string,
    tagInput: string,
    arr: StudentData[]
  ) => StudentData[];
  addTag: (tagString: string, studentId: number) => void;
}

const DataContext = createContext<DataContextValues>({
  data: [],
  filterInput: '',
  tagInput: '',
  setData: () => null,
  setFilterInput: () => null,
  setTagInput: () => null,
  filterData: () => [],
  addTag: () => null,
});

export default DataContext;

export const DataProvider = ({ children }: ContextProps): JSX.Element => {
  const [data, setData] = useState<StudentData[]>([]);
  const [filterInput, setFilterInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  useMemo(() => {
    getApiData().then((data) =>
      setData(
        /* Adding tags key to incoming data */
        data.students.map((student: StudentInformation) => {
          return { ...student, tags: [] };
        })
      )
    );
  }, []);

  const filterData = (
    filterInput: string,
    tagInput: string,
    arr: StudentData[]
  ) => {
    const [firstFilter] = filterInput.split(' ');
    /* may not need last...*/
    return arr.filter((student) => {
      return (
        nameContainsSubstring(student.firstName, firstFilter) ||
        nameContainsSubstring(student.lastName, firstFilter)
    );
  }).filter(student => arrayContainsSubstring(student.tags, tagInput));
}


  const addTag = (tagString: string, studentId: number) => {
    setData(
      data.map((student) => {
        return Number(student.id) !== studentId
          ? student
          : { ...student, tags: [...student.tags, tagString] };
      })
    );
  };

  const value: DataContextValues = {
    data,
    filterInput,
    tagInput,
    setData,
    setFilterInput,
    setTagInput,
    filterData,
    addTag,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
