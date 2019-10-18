<template lang="pug">
  .works-page
    .works-page__title
      page-title
    .works-page__form
      new-work-form
    .works-page__grid
      add-work-button.works-page__item
      work-item.works-page__item(
        v-for="i in 10"
      )
</template>

<script>
import PageTitle from '@/admin/components/PageTitle.vue';
import NewWorkForm from '@/admin/components/NewWorkForm.vue';
import AddWorkButton from '@/admin/components/AddWorkButton.vue';
import WorkItem from '@/admin/components/WorkItem.vue';

export default {
  components: {
    PageTitle,
    NewWorkForm,
    AddWorkButton,
    WorkItem,
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
      grid-gap: 20px;
    }

    @include tablets {
      grid-template-columns: 1fr;
    }
  }
}
</style>