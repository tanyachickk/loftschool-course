<template lang="pug">
  .login-form
    .login-form__title Авторизация
    button.login-form__close
      icon(name="remove")
    form.login-form__body
      .login-form__control
        basic-input(
          v-model="name"
          icon="user"
          label="Логин"
        )
      .login-form__control
        basic-input(
          v-model="password"
          icon="key"
          label="Пароль"
          type="password"
        )
      .login-form__button
        basic-button(@click="signIn") Отправить
</template>

<script>
import { mapActions } from "vuex";
import BasicInput from "@/admin/components/BasicInput.vue";
import BasicButton from "@/admin/components/BasicButton.vue";
import Icon from "@/admin/components/Icon.vue";

export default {
  components: {
    BasicInput,
    BasicButton,
    Icon
  },
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    async signIn() {
      await this.login({ name: this.name, password: this.password });
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="pcss" scoped>
.login-form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 563px;
  padding: 60px 78px;
  background-color: white;

  &__close {
    position: absolute;
    top: 30px;
    right: 30px;
    background: none;
    fill: $text-color;
    width: 20px;
    height: 20px;
    padding: 0;
    outline: none;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.3;
    }
  }

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