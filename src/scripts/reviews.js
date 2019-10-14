import Vue from 'vue';
import flickity from 'vue-flickity';
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
  template: '#reviews-content',
  components: {
    flickity,
    review,
  },
  data() {
    return {
      reviews,
      currentReviewIndex: 0,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        resize: true,
        cellAlign: 'left',
      },
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
      this.$refs.flickity.previous();
    },
    goToNextReview() {
      this.$refs.flickity.next();
    },
    setCellHeight() {
      const slides = this.$refs.flickity.getCellElements();
      slides.forEach((slide) => (slide.style.height = ''));

      const heights = slides.map((slide) => slide.offsetHeight);
      const max = Math.max(...heights);

      slides.forEach((slide) => (slide.style.height = max + 'px'));
    },
  },
  mounted() {
    this.$refs.flickity.on('change', (index) => {
      this.currentReviewIndex = index;
    });
    this.setCellHeight();
    window.addEventListener('resize', this.setCellHeight);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setCellHeight);
  },
});
