<template lang="pug">
  .login-form
    .login-form__title Авторизация
    button.login-form__close x
    form.login-form__body
      .login-form__control
        basic-input(
          label="Логин"
        )
      .login-form__control
        basic-input(
          label="Пароль"
          type="password"
        )
      .login-form__button
        basic-button Отправить
</template>

<script>
import BasicInput from '@/admin/components/BasicInput.vue';
import BasicButton from '@/admin/components/BasicButton.vue';

export default {
  components: {
    BasicInput,
    BasicButton,
  }
}
</script>

<style lang="pcss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 563px;
  padding: 60px 78px;
  background-color: white;

  &__title {
    color: $text-color;
    font-size: 36px;
    font-weight: 700;
  }

  &__control {
    margin-top: 60px;
  }

  &__button {
    margin-top: 40px;
  }
}
</style>