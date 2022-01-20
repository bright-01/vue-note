import { instance } from '@/api/index';

function fetchPosts() {
  return instance.get('posts');
}

export { fetchPosts };
