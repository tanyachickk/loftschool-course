<template lang="pug">
  #app
    router-view
    custom-notify(group="success-notify")
    custom-notify(group="error-notify")
</template>

<script>
import CustomNotify from './components/CustomNotify.vue';
export default {
  components: {
    CustomNotify,
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
</style>