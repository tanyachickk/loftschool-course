import Vue from 'vue';
import works from '../data/works';
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
  data() {
    return {
      windowWidth: 0,
    };
  },
  computed: {
    thumbs() {
      return this.works.filter((work) => work !== this.currentWork);
    },
    maxThumbsCount() {
      if (this.windowWidth < parseInt(constants['bp-phones'])) {
        return 0;
      }
      if (this.windowWidth < parseInt(constants['bp-desktop'])) {
        return 2;
      }
      if (this.windowWidth < parseInt(constants['bp-desktop-hd'])) {
        return 3;
      }
      return 4;
    },
    visibleWorks() {
      return this.works.slice(0, this.maxThumbsCount);
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
    skills: {
      type: Array,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    link: {
      type: String,
    },
  },
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
    makeArrayWithRequiredImages(data) {
      return data.map((item) => ({
        ...item,
        photo: require(`../images/content/${item.photo}`),
      }));
    },
  },
  created() {
    this.works = this.makeArrayWithRequiredImages(works);
  },
});
