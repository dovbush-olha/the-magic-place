import { AxiosResponse } from 'axios';
import { basicConfig } from '../basicConfig';
import { FetchedSpell } from './types/types';

export const spellsAPI = {
  getSpells(): Promise<FetchedSpell[]> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };

    return basicConfig
      .createRequest('/spells', options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },

  getSpell(id: string): Promise<FetchedSpell> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };

    return basicConfig
      .createRequest(`/spells/${id}`, options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },
};
