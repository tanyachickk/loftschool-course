<template lang="pug">
  .category-control
    .category-control__input
      simple-input(
        size="large"
        placeholder="Название новой группы"
        :readonly="!isEditMode"
      )
    .category-control__buttons
      button.category-control__button.category-control__button_edit(
        v-if="!isEditMode"
        key="edit"
        @click="isEditMode = true"
      )
        icon(name="pencil")
      template(v-else)
        button.category-control__button.category-control__button_save(
          key="save"
        )
          icon(name="tick")
        button.category-control__button.category-control__button_cancel(
          key="cancel"
          @click="isEditMode = false"
        )
          icon(name="cross")
</template>

<script>
import SimpleInput from 'components/SimpleInput.vue';
import Icon from 'components/Icon.vue';

export default {
  components: {
    SimpleInput,
    Icon,
  },
  props: {
    category: {
      type: String,
      default: '',
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isEditMode: true,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.category-control {
  display: flex;
  justify-content: space-between;

  &__input {
    width: 273px;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  &__button {
    padding: 0;
    width: 16px;
    height: 16px;
    fill: $text-color;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.5;
    }

    &_save {
      fill: $success-color;
      margin-right: 19px;
    }
    &_cancel {
      fill: $danger-color;
    }
  }
}
</style>