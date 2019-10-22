<template lang="pug">
  .login-page
    .login-page__form
      login-form
</template>

<script>
import LoginForm from '@/admin/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style lang="postcss" scoped>
.login-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(45, 60, 78, 0.9);
}
</style>