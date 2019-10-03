<template lang="pug">
  header.header
    .header__avatar
      img.header__image(src="../../images/content/author.jpg")
    .header__content
      .header__username Татьяна Курочкина
      .header__title Панель администрирования
      a.header__exit-link(@click="signOut") Выйти
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"]),
    signOut() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>

<style lang="pcss" scoped>
@import "../../styles/mixins.pcss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 60px;
  background-image: linear-gradient(
    to right,
    #9e4f00 0%,
    hsl(37, 100%, 35%) 100%
  );
  color: white;

  @include desktop {
    padding: 0 30px;
  }

  @include phones {
    padding: 0 20px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    margin-left: 20px;

    @include phones {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &__username {
    font-size: 18px;
    font-weight: 600;

    @include phones {
      font-size: 16px;
    }
  }

  &__title {
    margin-left: 28px;
    margin-right: auto;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;

    @include tablets {
      display: none;
    }
  }

  &__exit-link {
    color: white;
    opacity: 0.7;
    text-decoration: underline;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }

    @include desktop {
      font-size: 14px;
    }
  }
}
</style>