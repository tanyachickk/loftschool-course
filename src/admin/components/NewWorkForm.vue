<template lang="pug">
  card.new-work
    template(slot="title") Редактирование работы
    template(slot="content") content
</template>

<script>
import Card from 'components/Card.vue';

export default {
  components: {
    Card,
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
}
</style>