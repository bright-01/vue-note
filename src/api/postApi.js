import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

function fetchPost(id) {
  return posts.get(id);
}

function createPost(postData) {
  return posts.post('/', postData);
}

function deletePost(postId) {
  return posts.delete(postId);
}

function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
