// import Ember from 'ember'
//
// export default Ember.Route.extend({
// })

import Ember from 'ember'
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin'

export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  didRender: function () {
    console.log("logged in")
  }
})
