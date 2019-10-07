<template lang="pug">
  .basic-input
    input.basic-input__control(
      :type="type"
      :value="value"
      :required="required"
      :class="inputClass"
      v-on="listeners"
    )
    .basic-input__icon(v-if="icon")
      icon(:name="icon")
    label.basic-input__label {{ label }}
</template>

<script>
import Icon from '@/admin/components/Icon.vue';

export default {
  components: {
    Icon,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
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
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          if (!this.disabled) {
            this.$emit('input', event.target.value);
          }
        },
      };
    },
    inputClass() {
      return {
        'basic-input__control_dirty': this.value.length,
        'basic-input__control_disabled': this.disabled,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
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
    fill: rgba(65, 76, 99, 0.3);
    transform: translateY(-50%);
    pointer-events: none;
  }
  &__control:focus ~ &__icon,
  &__control_dirty ~ &__label {
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
    pointer-events: none;
    @include desktop {
      font-size: 14px;
    }
  }
  &__control:focus ~ &__label,
  &__control_dirty ~ &__label {
    transform: translateY(-200%);
  }
}
</style>