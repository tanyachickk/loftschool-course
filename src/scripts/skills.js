import Vue from 'vue';
import skills from '../data/skills';

const skill = {
  template: '#skill',
  props: {
    skillName: {
      type: String,
    },
    skillPercent: {
      type: Number,
    },
    isInViewport: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      r: 45,
    };
  },
  computed: {
    circumference() {
      return 2 * Math.PI * this.r;
    },
    lineLength() {
      return this.isInViewport ? this.circumference * (1 - this.skillPercent / 100) : this.circumference;
    },
  },
};

const skillsRow = {
  template: '#skills-row',
  components: {
    skill,
  },
  props: {
    skill: {
      type: Object,
    },
    isInViewport: {
      type: Boolean,
      default: true,
    }
  },
};

new Vue({
  el: '#skills-container',
  template: '#skills-list',
  components: {
    skillsRow,
  },
  data() {
    return {
      skills,
      observer: null,
      isInViewport: false,
    };
  },
  methods: {
    onIntersecting(entries) {
      entries.forEach((entry) => {
        if (entry.target === this.$refs.skills) {
          this.isInViewport = entry.isIntersecting;
        }
      })
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.onIntersecting);
    this.observer.observe(this.$refs.skills);
  },
  beforeDestroy() {
    this.observer.unobserve(this.$refs.skills);
  }
});
