<template lang="pug">
  #app
    router-view
    .tooltip-container(:class="{ 'tooltip-container_showed': showed }")
      tooltip
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Tooltip from './components/Tooltip.vue';

export default {
  components: {
    Tooltip,
  },
  computed: {
    ...mapState('tooltips', {
      showed: (state) => state.showed,
    }),
  },
};
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import 'normalize.css';
@import '../styles/mixins.pcss';
@import '../styles/layout/base.pcss';

.admin-wrapper {
  background-image: url('../images/content/train-bridge.jpg');
  background-size: cover;
}

.tooltip-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: 0.3s transform ease;
  &_showed {
    transform: translate(0);
  }
}
</style>