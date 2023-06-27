import { AxiosResponse } from 'axios';
import { basicConfig } from '../basicConfig';
import { FetchedProfessor } from './types/types';

export const professorsAPI = {
  getProfessors(): Promise<FetchedProfessor[]> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };

    return basicConfig
      .createRequest('/professors', options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },

  getProfessor(id: string): Promise<FetchedProfessor> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };

    return basicConfig
      .createRequest(`/professors/${id}`, options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },
};
