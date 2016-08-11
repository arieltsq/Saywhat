import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { service } = Ember.inject

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: service('session'),
  model(params) {
      return this.store.createRecord('translation',{
      phrase_id: params.phrase_id
    })
  },
  actions: {
    newTranslation (newSignup) {
      // console.log(this.get('phrase_id'))
      // newSignup.set('phrase_id')
      newSignup.set('user_id',JSON.parse(window.localStorage["ember_simple_auth:session"]).authenticated.id)
      newSignup.save().then(() => this.transitionTo('dashboard'))

    }
  }
});
