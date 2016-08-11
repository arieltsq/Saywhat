import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.createRecord('phrase')
  },
  actions: {
    newTranslation (newSignup) {
      // let newName = newSignup.get('name')
      // newSignup.set('name', newName)
      // console.log(newSignup.get('name'))

      // newSignup.save().then(() => this.transitionTo('dashboard'))
      // console.log('clicked')
      // console.log(newSignup.get('email'))
      // console.log(newSignup.get('password'))
      // console.log(newSignup.get('password_confirmation'))
      // newSignup.save().then(() => this.transitionTo('dashboard'))
      newSignup.save().then((a) => console.log())

    }
  }
});
