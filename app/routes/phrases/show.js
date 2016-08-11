import Ember from 'ember'

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { service } = Ember.inject

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: service('session'),
  model(params) {
    window.localStorage.id = params.phrase_id
    return Ember.RSVP.hash({
      phrases: this.store.findRecord('phrase', params.phrase_id),
      translations: this.store.findAll('translation')
    })
  // return this.store.findAll('translation').filterBy('phrase.id', params.phrase_id).mapBy('name')
  // return this.store.findRecord('phrase', params.phrase_id)
  // return this.store.findRecord('phrase', params.phrase_id)
  }
})
