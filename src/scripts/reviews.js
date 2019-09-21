import Vue from 'vue';
import reviews from '../data/reviews.json';

const review = {
  template: '#review',
  props: {
    author: {
      type: String,
    },
    position: {
      type: String,
    },
    photo: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};

new Vue({
  el: '#reviews-container',
  template: '#reviews',
  components: {
    review,
  },
  data() {
    return {
      reviews,
      currentReviewIndex: 0,
    };
  },
  computed: {
    reviewsWithRequiredImages() {
      return this.reviews.map((item) => ({
        ...item,
        photo: require(`../images/${item.photo}`),
      }));
    },
  },
  methods: {
    goToPrevReview() {
      this.currentReviewIndex = this.currentReviewIndex > 0 ? this.currentReviewIndex - 1 : this.reviews.length - 2;
    },
    goToNextReview() {
      this.currentReviewIndex = this.currentReviewIndex < this.reviews.length - 2 ? this.currentReviewIndex + 1 : 0;
    },
  },
});
