import Vue from 'vue';
import basicInput from '@/admin/components/BasicInput.vue';
import basicTextarea from '@/admin/components/BasicTextarea.vue';
import basicButton from '@/admin/components/BasicButton.vue';

new Vue({
  el: '#form-container',
  template: '#feedback-form',
  components: {
    basicInput,
    basicTextarea,
    basicButton,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    onFormSumbit() {
      event.preventDefault();
      console.log('form');
    },
  },
});
