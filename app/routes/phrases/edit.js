import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { service } = Ember.inject

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: service('session'),
  model(params) {
    console.log(params)
    return this.store.findRecord('phrase', params.phrase_id)

  },
  actions: {
    editPhrase (newProject) {
      // let newName = newProject.get('name')
      // newProject.set('name', newName)
      // console.log(newProject.get('name'))
       newProject.save().then(() => this.transitionTo('phrases'))
      console.log("clicked")

    },

    willTransition (transition) {
      let model = this.controller.get('model')
      console.log(model.get('name'))
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?")

        if (confirmation) {
          model.rollbackAttributes()
        } else {
          transition.abort()
        }
      }
    }
  }
});
