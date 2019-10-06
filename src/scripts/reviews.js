import Vue from 'vue';
import reviews from '../data/reviews.json';
import constants from '../styles/variables.json';

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
  template: '#reviews-content',
  components: {
    review,
  },
  data() {
    return {
      isMobile: false,
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
    itemWidth() {
      return this.isMobile ? 100 : 50;
    },
  },
  methods: {
    goToPrevReview() {
      this.currentReviewIndex = this.currentReviewIndex > 0 ? this.currentReviewIndex - 1 : this.reviews.length - 2;
    },
    goToNextReview() {
      this.currentReviewIndex = this.currentReviewIndex < this.reviews.length - 2 ? this.currentReviewIndex + 1 : 0;
    },
    setIsMobile() {
      this.isMobile = window.innerWidth <= parseInt(constants['bp-tablets']);
    },
  },
  mounted() {
    this.setIsMobile();
  },
  created() {
    window.addEventListener('resize', this.setIsMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setIsMobile);
  },
});
