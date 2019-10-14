<template lang="pug">
  card.skill-group
    category-control(
      slot="title"
      v-model="categoryTitle"
      :is-edit-mode="isEditMode"
      @edit="isEditMode = true"
      @cancel="onResetCategoryChanges"
      @delete="onDeleteSkillGroup"
      @save="onSaveCategoryChanges"
    )
    template(slot="content")
      table.skill-group__skills-table
        skill-row(
          v-for="skill in skills"
          :key="skill.id"
          :title="skill.title"
          :percent="skill.percent"
          @save="$emit('update-skill', { ...skill, ...$event })"
          @delete="$emit('delete-skill', skill.id)"
        )
      .skill-group__new-skill
        new-skill(
          @add="$emit('add-skill', $event)"
        )
</template>

<script>
import Card from 'components/Card.vue';
import CategoryControl from 'components/CategoryControl.vue';
import SkillRow from 'components/SkillRow.vue';
import NewSkill from 'components/NewSkill.vue';

export default {
  components: {
    Card,
    CategoryControl,
    SkillRow,
    NewSkill,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    categoryId: {
      type: Number,
      default: 0,
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      categoryTitle: '',
      isEditMode: false,
    };
  },
  methods: {
    onResetCategoryChanges() {
      this.categoryTitle = this.title;
      this.isEditMode = false;
    },
    onSaveCategoryChanges() {
      this.$emit('update-category', this.categoryTitle);
      this.isEditMode = false;
    },
    onDeleteSkillGroup() {
      this.$emit('delete-group');
    },
  },
  created() {
    this.categoryTitle = this.title;
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.skill-group {
  height: 100%;
  min-height: 415px;
  &__skills-table {
    margin-bottom: 30px;
  }

  &__new-skill {
    align-self: flex-end;
    margin-top: auto;
    margin-bottom: 14px;
  }
}
</style>