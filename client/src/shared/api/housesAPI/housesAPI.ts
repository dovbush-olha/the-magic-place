import { AxiosResponse } from 'axios';
import { basicConfig } from '../basicConfig';
import { FetchedHouse } from './types/types';

export const housesAPI = {
  getHouseTitles(id: string): Promise<FetchedHouse[]> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };

    return basicConfig
      .createRequest(`/houses/titles/${id}`, options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },

  getHouse(name: string): Promise<FetchedHouse> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };

    return basicConfig
      .createRequest(`/houses/${name}`, options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },
};
