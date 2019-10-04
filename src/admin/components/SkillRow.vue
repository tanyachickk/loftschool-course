<template lang="pug">
  tr.skill
    td.skill__title
      simple-input(
        :value="title"
        :readonly="!isEditMode"
        placeholder="Название навыка"
      )
    td.skill__percent
      simple-input(
        :value="percent"
        :readonly="!isEditMode"
      )
    td.skill__controls
      .skill__buttons(v-if="isEditMode")
        button.skill__button.skill__button_save(key="save")
          icon(name="tick")
        button.skill__button.skill__button_cancel(key="cancel" @click="isEditMode = false")
          icon(name="cross")
      .skill__buttons(v-else)
        button.skill__button.skill__button_edit(key="edit"  @click="isEditMode = true")
          icon(name="pencil")
        button.skill__button.skill__button_remove(key="delete")
          icon(name="trash")
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
    title: {
      type: String,
      default: '',
    },
    percent: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      isEditMode: false,
    };
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.skill {
  &__percent {
    padding: 0 30px 0 20px;
    width: 124px;
  }
  &__controls {
    width: 70px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__button {
    padding: 0;
    margin: 0 10px;
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
    }
    &_cancel {
      fill: $danger-color;
    }
  }
}
</style>