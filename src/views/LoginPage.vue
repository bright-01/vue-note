<template>
  <div>
    <h1>login</h1>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
};
</script>

<style scoped></style>
