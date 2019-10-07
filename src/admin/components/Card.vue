<template lang="pug">
  .card
    .card__header
      slot(name="title")
    .card__body
      slot(name="content")
</template>

<style lang="postcss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: white;

  &__header {
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
  }

  &__body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>