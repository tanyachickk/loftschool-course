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
    ...mapState('skills', {
      categories: (state) => state.categories,
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
    ...mapActions('tooltips', ['showTooltip']),
    ...mapActions('skills', [
      'fetchSkills',
      'addSkill',
      'editSkill',
      'removeSkill',
      'fetchCategories',
      'addNewSkillGroup',
      'updateSkillGroup',
      'removeSkillGroup',
    ]),
    showNewSkill() {
      this.isShowNewSkill = true;
    },
    hideNewSkill() {
      this.isShowNewSkill = false;
    },
    async createCategory(value) {
      try {
        await this.addNewSkillGroup(value);
        this.showTooltip({ type: 'success', text: 'Группа успешно добавлена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
      this.isShowNewSkill = false;
    },
    async updateCategory(id, title) {
      const sourceCategory = this.categories.find((item) => item.id);
      if (sourceCategory && sourceCategory.category === title) {
        return;
      }
      try {
        await this.updateSkillGroup({ id, title });
        this.showTooltip({ type: 'success', text: 'Группа успешно обновлена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async createSkill(category, data) {
      try {
        await this.addSkill({ ...data, category });
        this.showTooltip({ type: 'success', text: 'Навык успешно добавлен', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async updateSkill(data) {
      try {
        await this.editSkill(data);
        this.showTooltip({ type: 'success', text: 'Навык успешно обновлен', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async deleteSkill(id) {
      try {
        await this.showTooltip({ type: 'success', text: 'Навык успешно удален', duration: 3000 });
        this.removeSkill(id);
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
    async deleteSkillGroup(id) {
      try {
        await this.removeSkillGroup(id);
        this.showTooltip({ type: 'success', text: 'Группа успешно удалена', duration: 3000 });
      } catch (e) {
        this.showTooltip({ type: 'error', text: e.message, duration: 3000 });
      }
    },
  },
  async created() {
    try {
      await Promise.all([this.fetchSkills(), this.fetchCategories()]);
    } catch (e) {
      this.showTooltip({ type: 'error', text: 'Произошла ошибка при загрузке данных', duration: 3000 });
    }
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