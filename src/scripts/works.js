import Vue from 'vue';
import axios from 'axios';
import constants from '../styles/variables.json';

const sliderThumbs = {
  template: '#slider-thumbs',
  props: {
    works: {
      type: Array,
    },
    currentIndex: {
      type: Number,
    },
  },
};

const sliderTags = {
  template: '#slider-tags',
  props: {
    tags: {
      type: Array,
    },
  },
};

const sliderButtons = {
  template: '#slider-buttons',
  props: {
    isDisabledPrev: {
      type: Boolean,
    },
    isDisabledNext: {
      type: Boolean,
    },
  },
  methods: {
    onPrevButtonClick() {
      if (!this.isDisabledPrev) {
        this.$emit('prev-slide');
      }
    },
    onNextButtonClick() {
      if (!this.isDisabledNext) {
        this.$emit('next-slide');
      }
    },
  },
};

const sliderDisplay = {
  template: '#slider-display',
  components: {
    sliderThumbs,
    sliderButtons,
  },
  props: {
    works: {
      type: Array,
    },
    currentWork: {
      type: Object,
    },
    currentIndex: {
      type: Number,
    },
  },
  watch: {
    currentIndex(currentIndex) {
      if (currentIndex < this.offset) {
        this.offset = currentIndex;
      } else if (currentIndex > this.offset + this.maxThumbsCount - 1) {
        this.offset = currentIndex - this.maxThumbsCount + 1;
      }
    },
  },
  data() {
    return {
      windowWidth: 0,
      offset: 0,
    };
  },
  computed: {
    maxThumbsCount() {
      if (this.windowWidth < parseInt(constants['bp-phones'])) {
        return 0;
      }
      if (this.windowWidth < parseInt(constants['bp-tablets'])) {
        return 2;
      }
      if (this.windowWidth < parseInt(constants['bp-desktop-hd'])) {
        return 3;
      }
      return 4;
    },
  },
  methods: {
    goToPrevSlide() {
      if (this.currentIndex > 0) {
        this.goToSlide(this.currentIndex - 1);
      }
    },
    goToNextSlide() {
      if (this.currentIndex < this.works.length - 1) {
        this.goToSlide(this.currentIndex + 1);
      }
    },
    goToSlide(index) {
      this.$emit('change-slide', index);
    },
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.setWindowWidth();
  },
  created() {
    window.addEventListener('resize', this.setWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWindowWidth);
  },
};

const sliderInfo = {
  template: '#slider-info',
  components: {
    tags: sliderTags,
  },
  props: {
    techs: {
      type: String,
      default: '',
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  computed: {
    tags() {
      return this.techs.split(', ');
    }
  }
};

new Vue({
  el: '#slider-component',
  template: '#slider-container',
  components: {
    sliderDisplay,
    sliderInfo,
  },
  data() {
    return {
      works: [],
      currentWorkIndex: 0,
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentWorkIndex];
    },
  },
  methods: {
    changeSlide(value) {
      this.currentWorkIndex = value;
    },
    async fetchWorks() {
      const { data: works } = await axios.get(`${process.env.BASE_URL}/works/${process.env.USER_ID}`);
      this.works = works.map((item) => ({
        ...item,
        photo: `${process.env.BASE_URL}/${item.photo}`,
      }));
    },
  },
  created() {
    this.fetchWorks();
  },
});
