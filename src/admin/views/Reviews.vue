<template lang="pug">
  .reviews-page
    page-title
</template>

<script>
import PageTitle from "@/admin/components/PageTitle.vue";

export default {
  components: {
    PageTitle,
  }
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.reviews-page {
  padding: 60px;

  @include desktop {
    padding: 50px 30px;
  }

  @include phones {
    padding: 40px 20px;
  }
}
</style>