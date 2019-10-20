<template lang="pug">
  .image-upload
    label.image-upload__control(for="file-input")
      .image-upload__placeholder Перетащите или загрузите #[br] для загрузки изображения
      basic-button.image-upload__button(
        size="small"
        :bordered="true"
        @click="uploadFile"
      ) Загрузить фото
    input.image-upload__file#file-input(ref="file-input" type="file")
    
</template>

<script>
import BasicButton from 'components/BasicButton.vue';

export default {
  components: {
    BasicButton,
  },
  props: {
    value: {
      type: File,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    uploadFile() {
      this.$refs['file-input'].click();
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.image-upload {
  &__control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: $placeholder-color;
    cursor: pointer;
  }
  &__placeholder {
    color: rgba($text-color, 0.5);
    margin-bottom: 20px;
    line-height: 2;
  }
  &__file {
    display: none;
  }
  &__button {
    white-space: nowrap;
    text-transform: uppercase;
  }
}
</style>