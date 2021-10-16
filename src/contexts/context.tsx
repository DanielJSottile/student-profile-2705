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
}

const DataContext = createContext<DataContextValues>({
  data: [],
  setData: () => null,
});

export default DataContext;

export const DataProvider = ({ children }: ContextProps): JSX.Element => {
  const [data, setData] = useState<StudentInformation[]>([]);

  useEffect(() => {
    getApiData().then((data) => setData(data.students));
  }, []);

  const value: DataContextValues = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
