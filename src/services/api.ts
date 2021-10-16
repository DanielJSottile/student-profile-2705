const buildConfig = (config: any) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    }
  }
}

const parseJson =  async (response: Response) => {
  const json = await response.json();
  return {
    status: response.status,
    statusText: response.statusText,
    json
  };
}

export const fetchData = async (urlString: string, config: any) => {
  const fetchResult = await fetch(urlString, buildConfig(config));
  const res = await parseJson(fetchResult);

  if (res.status < 200 || res.status <= 300) {
    throw new Error(res.json.message)
  }
  return res.json;
}

export const apiGet = (url: string) => {
  return fetchData(url, {method: "GET"});
}
