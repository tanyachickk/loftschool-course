<template lang="pug">
  .tabs
    router-link.tabs__item(
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tab.link"
      :title="tab.name"
      exact-active-class="tabs__item_active"
    ) {{ tab.name }}
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    }
  }
};
</script>

<style lang="pcss" scoped>
@import '../../styles/mixins.pcss';

.tabs {
  display: flex;
  align-items: center;

  &__item {
    padding: 28px 30px;
    color: $text-color;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      font-weight: 600;
    }

    &::before {
      display: block;
      content: attr(title);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }

    &_active {
      position: relative;
      color: $accent-color;
      font-weight: 600;

      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 3px;
        background-color: $accent-color;
      }
    }

    @include phones {
      padding: 30px 19px;
      font-size: 14px;
    }
  }
}
</style>