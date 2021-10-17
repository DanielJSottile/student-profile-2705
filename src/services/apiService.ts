import { API_URL } from '../utils/constants';

const buildConfig = (config: any) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

const parseJson = async (response: Response) => {
  const json = await response.json();
  return {
    ok: response.ok,
    json,
  };
};

export const fetchData = async (urlString: string, config: any) => {
  const fetchResult = await fetch(urlString, buildConfig(config));
  const res = await parseJson(fetchResult);

  if (!res.ok) {
    throw new Error(res.json.message);
  }

  return res.json;
};

export const apiGet = (url: string): Promise<any> => {
  return fetchData(url, { method: 'GET' });
};

export const getApiData = (): Promise<any> => {
  return apiGet(API_URL);
};
