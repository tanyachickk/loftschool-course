import Vue from 'vue';
import axios from 'axios';
import skills from '../data/skills';

const skill = {
  template: '#skill',
  props: {
    title: {
      type: String,
    },
    percent: {
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
      return this.isInViewport ? this.circumference * (1 - this.percent / 100) : this.circumference;
    },
  },
};

const skillsRow = {
  template: '#skills-row',
  components: {
    skill,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    skills: {
      type: Array,
      default: () => ([]),
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
      skills: [],
      categories: [],
      observer: null,
      isInViewport: false,
    };
  },
  computed: {
    skillGroups() {
      return this.categories.map((category) => ({
        title: category.category,
        skills: this.skills.filter((skill) => skill.category === category.id),
      }));
    },
  },
  methods: {
    onIntersecting(entries) {
      entries.forEach((entry) => {
        if (entry.target === this.$refs.skills) {
          this.isInViewport = entry.isIntersecting;
        }
      })
    },
    async fetchSkills() {
      const { data: skills } = await axios.get(`${process.env.BASE_URL}/skills/${process.env.USER_ID}`);
      this.skills = skills;
    },
    async fetchCategories() {
      const { data: categories } = await axios.get(`${process.env.BASE_URL}/categories/${process.env.USER_ID}`);
      this.categories = categories;
    },
  },
  created() {
    this.fetchCategories();
    this.fetchSkills();
  },
  mounted() {
    this.observer = new IntersectionObserver(this.onIntersecting);
    this.observer.observe(this.$refs.skills);
  },
  beforeDestroy() {
    this.observer.unobserve(this.$refs.skills);
  }
});
