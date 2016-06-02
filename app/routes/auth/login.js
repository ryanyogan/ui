import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  flashMessages: inject.service(),

  actions: {
    doLogin() {
      const user = this.get('currentModel');
      this.get('session')
        .authenticate(
          'authenticator:blabber', user.email, user.password
        ).then(() => {
          this.get('flashMessages').success('Logged in!');
        }).catch((response) => {
          const { errors } = response;

          if (errors.mapBy('code').indexOf(401) >= 0) {
            this.get('flashMessages')
              .danger('There was a problem with your username or plassword.');
          } else {
            this.get('flashMessages').danger('Server Error');
          }
        });
    }
  },

  model() {
    return {
      email: '',
      password: ''
    };
  }
});
