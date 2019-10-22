<template lang="pug">
  notifications(:group="group" animation-type="velocity" width="391" :class="group" :position="position")
      template(slot="body" slot-scope="props")
        .custom-notify
          .custom-notify__title {{props.item.title}}
          a.custom-notify__close(@click="props.close")
            icon(name="cross")
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  props: {
    group: {
      type: 'success-notify' | 'error-notify',
      default: '',
    },
  },
  computed: {
    position() {
      if (this.type === 'success-notify') {
        return 'bottom left';
      }
      return 'bottom right';
    },
  },
};
</script>

<style lang="postcss">
@import '../../styles/mixins.pcss';

.success-notify {
  background-color: $success-notify;
  color: white;
  margin-left: 15vw;

  @include desktop {
    max-width: 46vw;
    margin-left: 4vw;
  }
  @include tablets {
    margin-left: 0;
  }
  @include phones {
    width: 100vw;
    max-width: 100vw;
  }
}
.error-notify {
  background-color: $error-notify;
  color: white;
  margin-right: 15vw;

  @include desktop {
    margin-right: 4vw;
    max-width: 46vw;
  }
  @include tablets {
    margin-right: 0;
  }
  @include phones {
    width: 100vw;
    max-width: 100vw;
  }
}
.custom-notify {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;

  &__title {
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__close {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    fill: white;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>