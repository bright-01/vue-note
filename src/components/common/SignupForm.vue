<template>
  <!--  submit.prevent 는 event.preventDefault()와 같은 효과를 가진다. 새로고침을 하지 않도록 제어하는 이벤트!!-->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">password : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <!--    button type 이 submit일 경우 이벤트 버블링으로 인해 form tag의 v-on:submit 이벤트를 타게 된다.-->
    <button type="submit">회원가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  name: 'SignupForm',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      console.log('object');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data);
      this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = null;
      this.password = null;
      this.nickname = null;
    },
  },
};
</script>

<style scoped></style>
