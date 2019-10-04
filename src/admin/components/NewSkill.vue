<template lang="pug">
  .new-skill
    .new-skill__title
      simple-input(
        v-model="title"
        placeholder="Новый навык"
      )
    .new-skill__percent
      simple-input(
        v-model="percent"
        type="number"
      )
    .new-skill__button
      basic-button(
        icon="plus"
        type="flat"
        :circle="true"
        @click="createSkill"
      )
</template>

<script>
import SimpleInput from 'components/SimpleInput.vue';
import BasicButton from 'components/BasicButton.vue';

export default {
  components: {
    SimpleInput,
    BasicButton,
  },
  data() {
    return {
      title: '',
      percent: 100,
    };
  },
  methods: {
    createSkill() {
      // TODO: validation
      this.$emit('add', { title: this.title, percent: this.percent });
      this.resetSkillData();
    },
    resetSkillData() {
      this.title = '';
      this.percent = 100;
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.new-skill {
  display: flex;
  align-items: flex-end;

  &__title {
    width: 218px;
  }

  &__percent {
    margin-left: 10px;
    width: 74px;
  }

  &__button {
    margin-left: 30px;
  }
}
</style>