import { AxiosResponse } from 'axios';
import { FetchedStudent } from './types/types';
import { basicConfig } from '../basicConfig';

export const studentsAPI = {
  getStudents(): Promise<FetchedStudent[]> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };
    return basicConfig
      .createRequest('/students', options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },

  getStudent(id: string): Promise<FetchedStudent> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };
    return basicConfig
      .createRequest(`/students/${id}`, options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },

  createStudents(data: FetchedStudent[]): Promise<FetchedStudent[]> {
    const options = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      data,
    };
    return basicConfig
      .createRequest('/students/createMany', options)
      .then((res: AxiosResponse) => res.data)
      .catch((error: Error) => Promise.reject(error));
  },
};
