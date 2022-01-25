import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

function createPost(postData) {
  console.log('postData : ', postData);
  return posts.post('/', postData);
}

export { fetchPosts, createPost };
