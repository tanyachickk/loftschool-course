<template lang="pug">
  card.new-work
    .new-work__header(slot="title") Редактирование работы
    template(slot="content")
      form.new-work__form
        .new-work__photo
          image-upload
        .new-work__info
          .new-work__form-control.new-work__form-control_title
            simple-input(
              label="Название"
            )
          .new-work__form-control.new-work__form-control_link
            simple-input(
              label="Ссылка"
            )
          .new-work__form-control.new-work__form-control_description
            simple-textarea(
              label="Описание"
            )
          .new-work__form-control.new-work__form-control_tags
            simple-input(
              label="Добавление тэга"
            )
          .new-work__controls
            basic-button.new-work__button(
              size="small"
              display="flat"
            ) Отмена
            basic-button.new-work__button.new-work__button_save(
              size="small"
              :bordered="true"
            ) Отправить
</template>

<script>
import Card from 'components/Card.vue';
import SimpleInput from 'components/SimpleInput.vue';
import SimpleTextarea from 'components/SimpleTextarea.vue';
import BasicButton from 'components/BasicButton.vue';
import ImageUpload from 'components/ImageUpload.vue';

export default {
  components: {
    Card,
    SimpleInput,
    SimpleTextarea,
    BasicButton,
    ImageUpload,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.new-work {
  &__header {
    font-size: 18px;
    padding: 10px;
  }
  &__form {
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-gap: 30px;
    font-weight: 700;
    margin: 20px 0;
  }

  &__form-control {
    margin-bottom: 30px;
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