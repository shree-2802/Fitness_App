export type handleChangeType=(e:React.ChangeEvent<HTMLInputElement>)=>void;

export type fetchDataType = (
    url: string,
    options: {
      method: string;
      params: {
        limit: string;
      };
      headers: {
        'X-RapidAPI-Key': string | undefined;
        'X-RapidAPI-Host': string;
      };
    }
  ) => Promise<any>;

export type bodyPartSearchType=(setBodyParts:React.Dispatch<React.SetStateAction<string[]>>)=>void;
