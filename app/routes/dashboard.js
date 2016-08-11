// import Ember from 'ember'
//
// export default Ember.Route.extend({
// })
import Ember from 'ember'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { service } = Ember.inject

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),
  model() {
    return Ember.RSVP.hash({
      phrases: this.store.findAll('phrase'),
      translations: this.store.findAll('translation')
    })
  },
  actions: {
  searchPhrases (phrases) {
    console.log("im being presssed")
    console.log(phrases)
  }

  }
})
