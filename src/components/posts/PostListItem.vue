<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/postApi';

export default {
  name: 'PostListItem',
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  // 전역으로 설정 하면 전체로 쓸 수 있음;
  // filters: {
  //   formatDate(value) {
  //     return new Date(value);
  //   },
  // },
  methods: {
    async deleteItem() {
      console.log('this.postItem._id : ', this.postItem._id);
      if (confirm('삭제 하시겠습니까?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style scoped></style>
