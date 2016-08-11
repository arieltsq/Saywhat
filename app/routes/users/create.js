import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user')
  },
  actions: {
    newUser(newSignup) {
      newSignup.save().then(() => this.transitionTo('login'))
    }
  }
})
