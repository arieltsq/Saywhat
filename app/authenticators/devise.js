// import Ember from 'ember'
// import Base from 'ember-simple-auth/authenticators/base'
//
// export default Base.extend({
//   restore(data) {
//   },
//
//   authenticate(/*args*/) {
//   },
//
//   invalidate(data) {
//   }
// })
import Devise from 'ember-simple-auth/authenticators/devise'

export default Devise.extend({
  //The authenticator specifies the API endpoint to which all authorization requests are posted.
  serverTokenEndpoint: 'https://saywhat-api.herokuapp.com/users/sign_in'
})
