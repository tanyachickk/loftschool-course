<template lang="pug">
   button.basic-button(
     :class="buttonClass"
     v-on="listerers"
    )
    .basic-button__icon-wrapper(v-if="icon")
      icon.basic-button__icon(:name="icon")
    .basic-button__text
      slot
</template>

<script>
import Icon from '@/admin/components/Icon.vue';

export default {
  components: {
    Icon,
  },
  props: {
    theme: {
      type: 'primary' | 'default',
      default: 'primary',
    },
    type: {
      type: 'filled' | 'border' | 'flat',
      defsult: 'filled',
    },
    size: {
      type: 'large' | 'default' | 'small',
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    listerers() {
      return {
        ...this.$listeners,
        click: (event) => {
          if (!this.disabled) {
            this.$emit('click', event);
          }
        },
      };
    },
    buttonClass() {
      return {
        'basic-button_circle': this.circle,
        'basic-button_disabled': this.disabled,
        [`basic-button_${this.size}`]: true,
        [`basic-button_${this.type}`]: true,
        [`basic-button_${this.theme}`]: true,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.basic-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 34px 120px;
  background-image: $primary-gradient;
  color: white;
  font-size: 18px;
  font-weight: 700;
  transition: background-image 0.2s ease;
  outline: none;
  cursor: pointer;
  @include phones {
    width: 100%;
    padding: 0;
  }
  &:hover {
    background-image: $reverse-gradient;
  }

  &_small {
    font-size: 16px;
  }

  &_small &__text {
    padding: 0 13px;
  }

  &_primary&_flat &__text {
    color: $accent-color;
  }

  &_circle {
    background: none;
    padding: 0;
    &:hover {
      background-image: none;
    }
  }

  &_circle &__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: $primary-gradient;
    transition: background-image 0.2s ease;
  }

  &_circle:hover &__icon-wrapper {
    background-image: $reverse-gradient;
  }

  &_circle:hover &__text {
    opacity: 0.8;
  }

  &_small&_circle &__icon-wrapper {
    width: 21px;
    height: 21px;
  }

  &_circle&_disabled &__icon-wrapper {
    background: $text-color;
    cursor: default;
    opacity: 0.3;
  }

  &__icon {
    width: 15px;
    height: 15px;
    fill: white;
  }

  &_small &__icon {
    width: 8px;
    height: 8px;
  }
}
</style>