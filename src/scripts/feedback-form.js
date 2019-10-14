import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import basicInput from '@/admin/components/BasicInput.vue';
import basicTextarea from '@/admin/components/BasicTextarea.vue';
import basicButton from '@/admin/components/BasicButton.vue';

Vue.use(SimpleVueValidation);
const Validator = SimpleVueValidation.Validator;

new Vue({
  el: '#form-container',
  template: '#feedback-form',
  components: {
    basicInput,
    basicTextarea,
    basicButton,
  },
  mixins: [SimpleVueValidation.mixin],
  validators: {
    name: (value) => {
      return Validator.value(value).required();
    },
    email: (value) => {
      return Validator.value(value)
        .required()
        .email();
    },
    message: (value) => {
      return Validator.value(value)
        .required()
        .minLength(5);
    },
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  computed: {
    errors() {
      return {
        name: this.validation.hasError('name') ? 'Введите имя' : '',
        email: this.validation.hasError('email') ? 'Введите корректный e-mail' : '',
        message: this.validation.hasError('message') ? 'Введите текст сообщения' : '',
      };
    },
  },
  methods: {
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
      this.validation.reset();
    },
    onFormSumbit() {
      event.preventDefault();
      this.$validate().then((success) => {
        if (success) {
          alert('Validation succeeded!');
          this.resetForm();
        }
      });
    },
  },
});
