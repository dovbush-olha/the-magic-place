import { basicConfig } from '../basicConfig';

export const studentsAPI = {
  getStudents() {
    return basicConfig
      .createRequest('/students', ['GET', { 'content-type': 'application/json' }])
      .then((res) => res.data.data)
      .catch((error) => Promise.reject(error));
  },

  getStudent(id) {
    const params = { id };
    return basicConfig
      .createRequest('/student/', ['GET', { 'content-type': 'application/json' }, params])
      .then((res) => res.data.data)
      .catch((error) => Promise.reject(error));
  },

  createStudents(data) {
    return basicConfig
      .createRequest('/students/createMany', ['POST', { 'content-type': 'application/json' }, undefined, data])
      .then((res) => res.data.data)
      .catch((error) => Promise.reject(error));
  },
};
