<template lang="pug">
   button.basic-button(v-on="$listeners")
    slot
</template>

<script>
export default {
  props: {
  }
};
</script>

<style lang="pcss" scoped>
@import '../../styles/mixins.pcss';

.basic-button {
  padding: 34px 120px;
  background-image: linear-gradient(to right, #ea7400 0%, #f29400 100%);
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-image 0.2s ease;
  outline: none;
  cursor: pointer;
  @include phones {
    width: 100%;
    padding: 0;
  }
  &:hover {
    background-image: linear-gradient(to right, #ff7f00 0%, #ff9d00 100%);
  }
}
</style>