<template lang="pug">
  .inner-page
    .inner-page__panel
      app-header
      .inner-page__navbar
        tabs(:tabs="routes")
    .inner-page__content
      router-view
</template>

<script>
import AppHeader from "@/admin/components/Header.vue";
import Tabs from "@/admin/components/Tabs.vue";

export default {
  components: {
    AppHeader,
    Tabs,
  },
  computed: {
    routes() {
      const mainRoutes = this.$router.options.routes[1].children;
      return mainRoutes.map((route) => {
        const quotedTitle =  route.meta.title.match(/«.+?»/g);
        const title = quotedTitle ? quotedTitle[0].replace(/[«»]/g, '') : route.meta.title;
        return {
          name: title,
          link: route.path,
        }
      });
    }
  }
};
</script>

<style lang="pcss" scoped>
@import '../../styles/mixins.pcss';

.inner-page {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);

  &__panel {
    flex-shrink: 0;
  }

  &__navbar {
    padding: 0 60px;
    background-color: white;

    @include phones {
      padding: 0 20px;
    }
  }

  &__content {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>