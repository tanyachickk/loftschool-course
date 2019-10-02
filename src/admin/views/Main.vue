<template lang="pug">
  .inner-page
    app-header
    router-view
</template>

<script>
import AppHeader from "@/admin/components/Header.vue";

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="pcss" scoped>
</style>