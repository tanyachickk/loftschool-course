<template lang="pug">
  card.new-work
    .new-work__header(slot="title") {{ title }}
    template(slot="content")
      form.new-work__form
        .new-work__photo
          image-upload
        .new-work__info
          .new-work__form-control.new-work__form-control_title
            simple-input(
              label="Название"
              v-model="workData.title"
            )
          .new-work__form-control.new-work__form-control_link
            simple-input(
              label="Ссылка"
              v-model="workData.link"
            )
          .new-work__form-control.new-work__form-control_description
            simple-textarea(
              label="Описание"
              v-model="workData.description"
            )
          .new-work__form-control.new-work__form-control_tags
            tags-input(
              label="Добавление тэга"
              v-model="workData.techs"
            )
          .new-work__controls
            basic-button.new-work__button(
              size="small"
              display="flat"
              @click="$emit('reset')"
            ) Отмена
            basic-button.new-work__button.new-work__button_save(
              size="small"
              :bordered="true"
            ) Отправить
</template>

<script>
import Card from 'components/Card.vue';
import SimpleInput from 'components/SimpleInput.vue';
import TagsInput from 'components/TagsInput.vue';
import SimpleTextarea from 'components/SimpleTextarea.vue';
import BasicButton from 'components/BasicButton.vue';
import ImageUpload from 'components/ImageUpload.vue';

export default {
  components: {
    Card,
    SimpleInput,
    TagsInput,
    SimpleTextarea,
    BasicButton,
    ImageUpload,
  },
  props: {
    currentWork: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      workData: {
        title: '',
        link: '',
        description: '',
        techs: '',
        photo: null,
      },
    };
  },
  computed: {
    title() {
      return this.currentWork ? 'Редактирование работы' : 'Создание работы';
    },
  },
  methods: {},
  created() {
    if (this.currentWork) {
      this.workData = { ...this.currentWork };
    }
  },
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
    grid-template-columns: 1fr 1fr;
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