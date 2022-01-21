import { instance } from '@/api/index';

function fetchPosts() {
  return instance.get('posts');
}

function createPost(postData) {
  console.log('postData : ', postData);
  return instance.post('posts', postData);
}

export { fetchPosts, createPost };
