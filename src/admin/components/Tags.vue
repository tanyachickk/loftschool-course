<template lang="pug">
  .tags
    .tags__item(v-for="tag in tags" :key="tag") {{ tag }}
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.tags {
  display: flex;
  align-items: center;

  &__item {
    padding: 0 20px;
    margin-right: 8px;
    background-color: white;
    color: rgba($text-color, 0.7);
    font-size: 13px;
    font-weight: 600;
    line-height: 30px;
    border-radius: 15px;
  }
}
</style>