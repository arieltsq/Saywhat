import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { service } = Ember.inject

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: service('session'),
  model() {
    return this.store.createRecord('phrase')
  },
  didRender() {
    console.log("nabecb")
    console.log("nabei")
  },
  actions: {
    newTranslation (newSignup) {
      // console.log(newSignup)
      // var data = {
      //   "name": newSignup.get('name'),
      //   "category": newSignup.get('category'),
      //   "user_id": JSON.parse(window.localStorage["ember_simple_auth:session"]).authenticated.id
      // }
      // console.log(data)
      // let newName = newSignup.get('name')
      // newSignup.set('name', newName)
      // console.log(newSignup.get('name'))

      // newSignup.save().then(() => this.transitionTo('dashboard'))
      // console.log('clicked')
      // console.log(newSignup.get('email'))
      // console.log(newSignup.get('password'))
      // console.log(newSignup.get('password_confirmation'))
      // console.log(JSON.parse(window.localStorage["ember_simple_auth:session"]).authenticated.token)
      // console.log(window.localStorage["ember_simple_auth:session"])
      newSignup.set('user_id',JSON.parse(window.localStorage["ember_simple_auth:session"]).authenticated.id)
      newSignup.save().then(() => this.transitionTo('dashboard'))
      // newSignup.save().then(() => this.transitionTo('dashboard'))
      // newSignup.save().then((a) => console.log())

    }
  }
});
