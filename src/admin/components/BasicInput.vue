<template lang="pug">
  .basic-input
    input.basic-input__control(
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    )
    .basic-input__icon
      slot
    label.basic-input__label {{ label }}
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    }
  }
};
</script>

<style lang="pcss" scoped>
@import '../../styles/mixins.pcss';

.basic-input {
  position: relative;
  width: 100%;
  &__control {
    padding-left: 45px;
    width: 100%;
    color: $text-color;
    font-size: 18px;
    font-weight: 700;
    line-height: 56px;
    background: none;
    border: none;
    border-bottom: 1px solid $light-gray;
    outline: none;
    transition: border 0.2s ease;
    &:focus {
      border-bottom-color: $accent-color;
    }
    @include desktop {
      font-size: 14px;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 0;
    width: 30px;
    height: 30px;
    fill: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%);
    z-index: -1;
  }
  &__control:focus ~ &__icon {
    fill: $accent-color;
  }
  &__label {
    position: absolute;
    top: 50%;
    left: 45px;
    bottom: auto;
    color: rgba(65, 76, 99, 0.3);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    transform: translateY(-50%);
    transition: transform 0.2s ease;
    z-index: -1;
    @include desktop {
      font-size: 14px;
    }
  }
  &__control:focus ~ &__label {
    transform: translateY(-200%);
  }
}

</style>