<template lang="pug">
  card.new-review
    .new-review__header(slot="title") Новый отзыв
    template(slot="content")
      form.new-review__form
        .new-review__photo
          avatar-upload
        .new-review__name
          simple-input(
            label="Имя автора"
          )
        .new-review__position
          simple-input(
            label="Титул автора"
          )
        .new-review__text
          simple-textarea(
            label="Отзыв"
          )
        .new-review__controls
          basic-button.new-review__button(
            size="small"
            display="flat"
          ) Отмена
          basic-button.new-review__button.new-review__button_save(
            size="small"
            :bordered="true"
          ) Сохранить
</template>

<script>
import Card from 'components/Card.vue';
import SimpleInput from 'components/SimpleInput.vue';
import SimpleTextarea from 'components/SimpleTextarea.vue';
import BasicButton from 'components/BasicButton.vue';
import AvatarUpload from 'components/AvatarUpload.vue';

export default {
  components: {
    Card,
    SimpleInput,
    SimpleTextarea,
    BasicButton,
    AvatarUpload,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.new-review {
  &__header {
    font-size: 18px;
    padding: 10px;
  }
  &__form {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 30px;
    max-width: 841px;
    font-weight: 700;
    margin: 20px 0;
  }

  &__photo {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  &__name {
  }

  &__position {
  }

  &__text {
    grid-column: 2 / 4;
  }

  &__button_save {
    text-transform: uppercase;
  }

  &__controls {
    grid-column: 2 / 4;
    display: flex;
    justify-content: flex-end;
  }
}
</style>