import { AxiosResponse } from 'axios';
import { FetchedStudent } from 'shared/api/studentsAPI/types/types';
import { basicConfig } from '../basicConfig';

export const studentsAPI = {
  getStudents(): Promise<FetchedStudent[]> {
    return basicConfig
      .createRequest('/students', ['GET', { 'content-type': 'application/json' }])
      .then((res: AxiosResponse) => res.data.data)
      .catch((error) => Promise.reject(error));
  },

  getStudent(id): Promise<FetchedStudent> {
    const params = { id };
    return basicConfig
      .createRequest('/student/', ['GET', { 'content-type': 'application/json' }, params])
      .then((res) => res.data.data)
      .catch((error) => Promise.reject(error));
  },

  createStudents(data): Promise<FetchedStudent[]> {
    return basicConfig
      .createRequest('/students/createMany', ['POST', { 'content-type': 'application/json' }, undefined, data])
      .then((res) => res.data.data)
      .catch((error) => Promise.reject(error));
  },
};
