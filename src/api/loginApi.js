import { instance } from '@/api/index';

function loginUser(userData) {
  return instance.post('login', userData);
}

export { loginUser };
