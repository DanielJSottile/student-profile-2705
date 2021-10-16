import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import {StudentInformation} from '../@types';

import { getApiData } from '../services/api';

type ContextProps = {
  children: ReactNode;
};

interface DataContextValues {
  data: StudentInformation[];
  setData: Dispatch<SetStateAction<StudentInformation[]>>;
  filterData: (input: string) => void;
}

const DataContext = createContext<DataContextValues>({
  data: [],
  setData: () => null,
  filterData: () => null,
});

export default DataContext;

export const DataProvider = ({ children }: ContextProps): JSX.Element => {
  const [data, setData] = useState<StudentInformation[]>([]);

  useEffect(() => {
    getApiData().then((data) => setData(data.students));
  }, []);

  const filterData = (input: string) => {
    // work on this next
  }

  const value: DataContextValues = {
    data,
    setData,
    filterData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
