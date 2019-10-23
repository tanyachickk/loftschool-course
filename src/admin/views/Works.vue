<template lang="pug">
  .works-page
    .works-page__title
      page-title
    .works-page__form(v-if="isShowForm")
      work-form(
        :current-work="currentWork"
        @reset="cancelWorkChanges"
      )
    .works-page__grid
      card-gradient-button.works-page__item(
        @click="addWork"
      ) Добавить #[br] работу
      work-item.works-page__item(
        v-for="i in 10"
        :key="i"
        @edit="editWork"
      )
</template>

<script>
import PageTitle from '@/admin/components/PageTitle.vue';
import WorkForm from '@/admin/components/WorkForm.vue';
import CardGradientButton from '@/admin/components/CardGradientButton.vue';
import WorkItem from '@/admin/components/WorkItem.vue';

export default {
  components: {
    PageTitle,
    WorkForm,
    CardGradientButton,
    WorkItem,
  },
  data() {
    return {
      isShowForm: false,
      currentWork: null,
    };
  },
  methods: {
    addWork() {
      this.currentWork = null;
      this.isShowForm = true;
    },
    cancelWorkChanges() {
      this.currentWork = null;
      this.isShowForm = false;
    },
    editWork(work) {
      this.currentWork = work;
      this.isShowForm = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.works-page {
  padding: 60px;

  @include desktop {
    padding: 50px 30px;
  }

  @include phones {
    padding: 40px 20px;
  }

  &__title {
    margin-bottom: 60px;
    @include phones {
      padding: 0 20px;
      margin-bottom: 48px;
    }
  }

  &__form {
    margin-bottom: 32px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;

    @include desktop {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    @include tablets {
      grid-template-columns: 1fr;
    }
  }
}
</style>