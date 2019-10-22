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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(45, 60, 78, 0.9);

  &__form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>