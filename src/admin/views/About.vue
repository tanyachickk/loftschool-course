<template lang="pug">
  .about-page
    .about-page__header
      page-title
      .about-page__add-group
    .about-page__content
      .about-page__skill-group(
        v-for="skill in skills"
      )
        skill-group()
</template>

<script>
import { mapState, mapActions } from "vuex";
import PageTitle from "@/admin/components/PageTitle.vue";
import SkillGroup from "@/admin/components/SkillGroup.vue";

export default {
  components: {
    PageTitle,
    SkillGroup
  },
  computed: {
    ...mapState("skills", ["skills"])
  },
  methods: {
    ...mapActions("skills", ["fetchSkills"])
  },
  created() {
    this.fetchSkills();
  }
};
</script>

<style lang="pcss" scoped>
@import "../../styles/mixins.pcss";

.about-page {
  padding: 60px;

  @include desktop {
    padding: 50px 30px;
  }

  @include phones {
    padding: 40px 20px;
  }
}
</style>