<template lang="pug">
  .works-page
    .works-page__title
      page-title
    .works-page__form(ref="form" v-if="isShowForm")
      work-form(
        :current-work="currentWork"
        @reset="cancelWorkChanges"
      )
    .works-page__grid
      card-gradient-button.works-page__item(
        :is-disabled="isShowForm && !currentWork"
        @click="addWork"
      ) Добавить #[br] работу
      work-item.works-page__item(
        v-for="item in works"
        :key="item.id"
        :is-active="item === currentWork"
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
      works: [],
      currentWork: null,
      isShowForm: false,
    };
  },
  methods: {
    showForm() {
      this.isShowForm = true;
      this.$nextTick(() => {
        this.$scrollTo(this.$refs.form, 500, {
          container: '.inner-page__content',
          offset: -50,
        });
      });
    },
    addWork() {
      this.currentWork = null;
      this.showForm();
    },
    cancelWorkChanges() {
      this.currentWork = null;
      this.isShowForm = false;
    },
    editWork(work) {
      this.currentWork = work;
      this.showForm();
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