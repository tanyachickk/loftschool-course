import Vue from 'vue';
import skills from '../data/skills.json';

const skill = {
  template: '#skill',
  props: {
    skillName: {
      type: String,
    },
    skillPercent: {
      type: Number,
    },
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
      return this.circumference * (1 - this.skillPercent / 100);
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
    };
  },
});
