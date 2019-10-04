<template lang="pug">
  card.skill-group
    .skill-group__header
      category-control(
      )
    .skill-group__body
      table.skill-group__skills-table
        skill-row
        skill-row
        skill-row
        skill-row
      .skill-group__new-skill
        new-skill
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
    category: {
      type: String,
      default: '',
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.skill-group {
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 387px;

  &__header {
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
  }

  &__body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

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