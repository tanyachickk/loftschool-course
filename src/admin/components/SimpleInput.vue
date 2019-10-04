<template lang="pug">
  .sinple-input
    input.sinple-input__control(
      :type="type"
      :value="value"
      :min="minValue"
      :max="maxValue"
      :step="step"
      :readonly="readonly"
      :placeholder="placeholder"
      :class="inputClass"
      @input="$emit('input', $event.target.value)"
    )
</template>

<script>
export default {
  props: {
    value: {
      type: String | Number,
      default: '',
    },
    maxValue: {
      type: Number,
      default: 100,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    inputClass() {
      return {
        [`sinple-input__control_${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.sinple-input {
  position: relative;
  width: 100%;
  &__control {
    width: 100%;
    color: $text-color;
    font-size: 16px;
    font-weight: 400;
    line-height: 42px;
    background: none;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    transition: border 0.2s ease;

    &:focus {
      border-bottom-color: $accent-color;
    }
    &:read-only {
      border-color: transparent;
    }
    @include desktop {
      font-size: 14px;
    }

    &_large {
      font-size: 18px;
      font-weight: 600;
      line-height: 44px;

      &::placeholder {
        font-weight: 400;
      }
    }
  }
}
</style>