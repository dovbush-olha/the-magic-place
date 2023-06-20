import { basicConfig } from 'shared/api/basicConfig';
import { FetchedProfessor } from 'shared/api/professorsAPI/types/types';

export const professorsAPI = {
  getProfessors(): Promise<FetchedProfessor[]> {
    return basicConfig
      .createRequest('/professors', ['GET', { 'content-type': 'application/json' }])
      .then((res) => res.data)
      .catch((error) => Promise.reject(error));
  },

  getProfessor(id): Promise<FetchedProfessor> {
    const params = { id };
    return basicConfig
      .createRequest('/professors', ['GET', { 'content-type': 'application/json' }, params])
      .then((res) => res.data)
      .catch((error) => Promise.reject(error));
  },
};
