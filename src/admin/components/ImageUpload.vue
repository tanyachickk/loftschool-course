<template lang="pug">
  .image-upload
    label.image-upload__control(for="file-input")
      .image-upload__placeholder(v-if="!renderedPhoto")
        .image-upload__placeholder-text Перетащите или загрузите #[br] для загрузки изображения
        basic-button.image-upload__button(
          size="small"
          :bordered="true"
          @click="uploadFile"
        ) Загрузить фото
      img.image-upload__value(v-else :src="renderedPhoto")
    input.image-upload__file#file-input(
      ref="file-input"
      type="file"
      accept="image/jpeg,image/png"
      @change="handlePhotoUpload"
    )
    basic-button.image-upload__change-image(
      v-if="renderedPhoto"
      display="flat"
      @click="uploadFile"
    ) Изменить превью
    transition(name="slide-up")
      .image-upload__error(v-if="errorMessage")
        error-tooltip {{ errorMessage }}
</template>

<script>
import { mapActions } from 'vuex';
import ErrorTooltip from '@/admin/components/ErrorTooltip.vue';
import BasicButton from 'components/BasicButton.vue';
import { renderer, getAbsoluteImgPath } from '@/admin/helpers/pictures';

export default {
  components: {
    BasicButton,
    ErrorTooltip,
  },
  props: {
    value: {
      type: File | String,
      default: null,
    },
    maxSize: {
      type: Number,
      default: 1500000,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  watch: {
    value(value) {
      this.setRenderedPhoto();
    },
  },
  data() {
    return {
      renderedPhoto: null,
    };
  },
  methods: {
    ...mapActions('tooltips', ['showTooltip']),
    uploadFile() {
      this.$refs['file-input'].click();
    },
    setRenderedPhoto() {
      if (typeof this.value === 'string') {
        this.renderedPhoto = getAbsoluteImgPath(this.value);
      } else {
        if (this.value) {
          this.renderPhoto(this.value);
        } else {
          this.renderedPhoto = null;
        }
      }
    },
    async renderPhoto(file) {
      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
      } catch (error) {
        this.showTooltip({ type: 'error', text: error.message, duration: 3000 });
        this.$emit('input', null);
      }
    },
    async handlePhotoUpload(e) {
      const file = e.target.files[0];
      if (file.size > this.maxSize) {
        this.showTooltip({ type: 'error', text: 'Слишком большой размер файла (максимум 1.5MB)', duration: 3000 });
        return;
      }
      this.$emit('input', file);
    },
  },
  created() {
    this.setRenderedPhoto();
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.image-upload {
  position: relative;
  &__control {
    display: block;
    width: 100%;
    height: 276px;
    cursor: pointer;
  }
  &__placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px dashed #a1a1a1;
    background-color: $placeholder-color;
  }
  &__placeholder-text {
    color: rgba($text-color, 0.5);
    margin-bottom: 20px;
    line-height: 2;
  }
  &__value {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
  &__change-image {
    width: 100%;
  }
  &__file {
    display: none;
  }
  &__button {
    white-space: nowrap;
    text-transform: uppercase;
  }
  &__error {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.slide-up {
  &-enter-to,
  &-leave {
    transition: all 0.3s ease;
  }
  &-enter,
  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
}
</style>