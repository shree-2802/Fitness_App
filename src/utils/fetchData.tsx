import { FitnessAPI } from '../base-url/baseuRL';
import { bodyPartSearchType, fetchDataType } from '../types';

export const bodyPartSearch: bodyPartSearchType = async (setBodyParts) => {
  const response = await fetchData('/bodyPartList', options);
  setBodyParts(response);
};

export const options = {
  method: 'GET',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData: fetchDataType = async (url, options) => {
  const response = await FitnessAPI.get(url, options);
  const data = await response.data;
  return data;
};
