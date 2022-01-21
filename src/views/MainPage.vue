<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <postListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></postListItem>
        <router-link to="/add" class="create-button">
          <i class="ion-md-add"></i>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/postApi';
import postListItem from '@/components/posts/PostListItem';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  components: {
    postListItem,
    LoadingSpinner,
  },
  created() {
    this.fetchNotes();
  },
  methods: {
    async fetchNotes() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
};
</script>

<style></style>
