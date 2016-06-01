import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
      console.log('Login');
    }
  },

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
