// import Ember from 'ember'
//
// export default Ember.Component.extend({
//   actions: {
//    authenticate: function() {
//      alert("Hey! I tried, but I don't know how to authenticate.")
//    }
//  }
// })

// app/components/login-form.js
import Ember from 'ember'

const { service } = Ember.inject

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate: function () {
      let { identification, password } = this.getProperties('identification', 'password')
      return this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error)
      })
    }
  }
})
