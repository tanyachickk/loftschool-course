<template lang="pug">
  .about-page
    .about-page__header
      page-title
      .about-page__add-group(v-if="!isShowNewSkill")
        basic-button(
          size="small"
          icon="plus"
          type="flat"
          :circle="true"
          @click="showNewSkill"
        ) Добавить группу
    .about-page__content
      .about-page__skill-group(v-if="isShowNewSkill")
        skill-group()
      .about-page__skill-group(
        v-for="skill in skills"
      )
        skill-group()
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PageTitle from '@/admin/components/PageTitle.vue';
import BasicButton from '@/admin/components/BasicButton.vue';
import SkillGroup from '@/admin/components/SkillGroup.vue';

export default {
  components: {
    PageTitle,
    BasicButton,
    SkillGroup,
  },
  data() {
    return {
      isShowNewSkill: false,
    };
  },
  computed: {
    ...mapState('categories', {
      categories: (state) => state.categories,
    }),
    ...mapState('skills', {
      skills: (state) => state.skills,
    }),
  },
  methods: {
    ...mapActions('skills', ['fetchSkills']),
    showNewSkill() {
      this.isShowNewSkill = true;
    },
    hideNewSkill() {
      this.isShowNewSkill = false;
    },
  },
  created() {
    this.fetchSkills();
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.about-page {
  padding: 60px;

  @include desktop {
    padding: 50px 30px;
  }

  @include phones {
    padding: 40px 20px;
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__add-group {
    margin-left: 60px;
  }

  &__content {
    display: flex;
    margin-top: 60px;
  }

  &__skill-group {
    flex-basis: 50%;
    margin-right: 32px;
  }
}
</style>