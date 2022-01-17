import { instance } from '@/api/index';

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);

  return instance.post('signup', userData);
}

export { registerUser };
