<template lang="pug">
  card.work-item(:class="{ 'work-item_active': isActive }")
    .work-item__preview(slot="media")
      img.work-item__image(:src="require('../../images/content/1.jpg')")
      .work-item__tags
        tags(:tags="['html', 'css', 'js']")
    .work-item__content(slot="content")
      .work-item__title Сайт школы образования
      .work-item__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
      a.work-item__link(href="http://loftschool.ru" target="_blank") http://loftschool.ru
      .work-item__controls
        button.work-item__button.work-item__button_edit(@click="$emit('edit')")
          .work-item__button-text Править
          icon.work-item__button-icon_edit(name="pencil")
        button.work-item__button.work-item__button_delete(@click="$emit('delete')")
          .work-item__button-text Удалить
          icon.work-item__button-icon_delete(name="cross")
</template>

<script>
import Card from 'components/Card.vue';
import Tags from 'components/Tags.vue';
import Icon from 'components/Icon.vue';

export default {
  components: {
    Card,
    Tags,
    Icon,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.work-item {
  position: relative;
  &_active::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(white, 0.7);
  }
  &__preview {
    position: relative;
    width: 100%;
    height: 190px;
  }
  &__image {
    object-fit: cover;
    object-position: top center;
    width: 100%;
    height: 100%;
  }
  &__tags {
    position: absolute;
    bottom: 9px;
    right: 0;
    display: flex;
    align-items: center;
  }
  &__title {
    color: $text-color;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
  }
  &__text {
    margin: 20px 0;
    color: rgba($text-color, 0.7);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
  }
  &__link {
    color: $link-color;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    &:hover {
      opacity: 0.7;
    }
  }
  &__button-text {
    margin-right: 10px;
    font-weight: 600;
    color: rgba($text-color, 0.5);
  }
  &__button-icon {
    &_edit {
      width: 17px;
      height: 17px;
      fill: $link-color;
    }
    &_delete {
      width: 15px;
      height: 15px;
      fill: $danger-color;
    }
  }
}
</style>