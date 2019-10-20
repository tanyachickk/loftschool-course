<template lang="pug">
  .avatar-upload
    label.avatar-upload__control(for="file-input")
    input.avatar-upload__file#file-input(ref="file-input" type="file")
    basic-button.avatar-upload__button(
      size="small"
      display="flat"
      @click="uploadFile"
    ) {{ value ? 'Изменить фото' : 'Добавить фото' }}
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

.avatar-upload {
  &__control {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: $placeholder-color;
    background-image: url('~images/content/man-user.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 85px 113px;
    transition: opacity 0.2s ease;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  &__file {
    display: none;
  }
  &__button {
    width: 100%;
    white-space: nowrap;
  }
}
</style>