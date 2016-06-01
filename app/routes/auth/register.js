import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doRegister() {
      console.log('Register!');
    }
  },

  model() {
    return this.store.createRecord('user');
  }
});
