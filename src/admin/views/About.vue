<template lang="pug">
  .about-page
    .about-page__header
      page-title
      .about-page__add-group(v-if="!isShowNewSkill")
        basic-button(
          size="small"
          icon="plus"
          display="flat"
          :circle="true"
          @click="showNewSkill"
        ) Добавить группу
    .about-page__content
      .about-page__skill-group(v-if="isShowNewSkill")
        new-skill-group(
          @create-category="createCategory"
          @reset="isShowNewSkill = false"
        )
      .about-page__skill-group(
        v-for="category in categories"
      )
        skill-group(
          :key="category.id"
          :title="category.category"
          :category-id="category.id"
          :skills="skillsByCategory[category.id]"
          @update-category="updateCategory(category.id, $event)"
          @delete-group="deleteSkillGroup(category.id)"
          @add-skill="createSkill(category.id, $event)"
          @update-skill="updateSkill"
          @delete-skill="deleteSkill"
        )
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PageTitle from '@/admin/components/PageTitle.vue';
import BasicButton from '@/admin/components/BasicButton.vue';
import NewSkillGroup from '@/admin/components/NewSkillGroup.vue';
import SkillGroup from '@/admin/components/SkillGroup.vue';

export default {
  components: {
    PageTitle,
    BasicButton,
    NewSkillGroup,
    SkillGroup,
  },
  data() {
    return {
      isShowNewSkill: false,
    };
  },
  computed: {
    ...mapState('categories', {
      categories: (state) =>
        state.categories.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()),
    }),
    ...mapState('skills', {
      skills: (state) => state.skills,
    }),
    skillsByCategory() {
      const result = {};
      this.categories.forEach((category) => {
        result[category.id] = [];
      });
      this.skills.forEach((skill) => {
        if (result[skill.category]) {
          result[skill.category].push(skill);
        }
      });
      return result;
    },
  },
  methods: {
    ...mapActions('skills', ['fetchSkills', 'addSkill', 'editSkill', 'removeSkill']),
    ...mapActions('categories', ['fetchCategories', 'addNewSkillGroup', 'updateSkillGroup', 'removeSkillGroup']),
    showNewSkill() {
      this.isShowNewSkill = true;
    },
    hideNewSkill() {
      this.isShowNewSkill = false;
    },
    async createCategory(value) {
      try {
        this.addNewSkillGroup(value);
      } catch (e) {
        // TODO
      }
      this.isShowNewSkill = false;
    },
    async updateCategory(id, title) {
      try {
        this.updateSkillGroup({ id, title });
      } catch (e) {
        // TODO
      }
    },
    async createSkill(category, data) {
      try {
        this.addSkill({ ...data, category });
      } catch (e) {
        // TODO
      }
    },
    async updateSkill(data) {
      try {
        this.editSkill(data);
      } catch (e) {
        // TODO
      }
    },
    async deleteSkill(id) {
      try {
        this.removeSkill(id);
      } catch (e) {
        // TODO
      }
    },
    async deleteSkillGroup(id) {
      try {
        this.removeSkillGroup(id);
      } catch (e) {
        // TODO
      }
    },
  },
  created() {
    this.fetchSkills();
    this.fetchCategories();
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
    padding: 40px 0;
  }

  &__header {
    display: flex;
    align-items: center;

    @include phones {
      padding: 0 20px;
    }
  }

  &__add-group {
    margin-left: 60px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 60px;

    @include desktop {
      margin-top: 48px;
      grid-gap: 20px;
    }

    @include tablets {
      grid-template-columns: 1fr;
    }
  }

  &__skill-group {
  }
}
</style>