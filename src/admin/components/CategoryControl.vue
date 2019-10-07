<template lang="pug">
  .category-control
    .category-control__input
      simple-input(
        :value="value"
        :readonly="!isEditMode"
        size="large"
        placeholder="Название новой группы"
        @input="$emit('input', $event)"
      )
    .category-control__buttons
      template(v-if="!isEditMode")
        button.category-control__button.category-control__button_edit(
          key="edit"
          @click="$emit('edit')"
        )
          icon(name="pencil")
        button.category-control__button.category-control__button_delete(
          key="delete"
          @click="$emit('delete')"
        )
          icon(name="trash")
      template(v-else)
        button.category-control__button.category-control__button_save(
          key="save"
          @click="$emit('save')"
        )
          icon(name="tick")
        button.category-control__button.category-control__button_cancel(
          key="cancel"
          @click="$emit('cancel')"
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
    value: {
      type: String,
      default: '',
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
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
    margin-right: 15px;
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

    &_delete {
      margin-left: 19px;
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