import axios from 'axios';
import { setInterceptors } from './common/interceptors';

//auth가 필요하지 않는 api
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return instance;
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

const instance = createInstance();
const posts = createInstanceWithAuth('posts');
export { instance, posts };
