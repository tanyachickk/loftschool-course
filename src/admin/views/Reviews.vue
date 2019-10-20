<template lang="pug">
  .reviews-page
    .reviews-page__title
      page-title
    .reviews-page__form
      new-review-form
    .reviews-page__grid
      card-gradient-button.reviews-page__item Добавить #[br] отзыв
      review-item.reviews-page__item(
        v-for="i in 10"
        :key="i"
      )
</template>

<script>
import PageTitle from '@/admin/components/PageTitle.vue';
import CardGradientButton from '@/admin/components/CardGradientButton.vue';
import NewReviewForm from '@/admin/components/NewReviewForm.vue';
import ReviewItem from '@/admin/components/ReviewItem.vue';

export default {
  components: {
    PageTitle,
    CardGradientButton,
    NewReviewForm,
    ReviewItem,
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.reviews-page {
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

    @include phones {
      grid-template-columns: 1fr;
    }
  }
}
</style>