<template lang="pug">
  header.header
    .header__image
    .header__content
      .header__username Татьяна Курочкина
      .header__title Панель администрирования
      .header__exit Выйти
</template>

<script>
export default {};
</script>

<style lang="pcss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 60px;
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }
}
</style>