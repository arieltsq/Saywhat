// import DS from 'ember-data'
//
// export default DS.JSONAPIAdapter.extend({
// })
import DS from 'ember-data'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise',
  host: 'https://saywhat-api.herokuapp.com'
})

export default DS.RESTAdapter.extend({
  headers: {
  // "Authorization": "Token token="+JSON.parse(window.localStorage["ember_simple_auth:session"]).authenticated.token
  "auth_token": JSON.parse(window.localStorage["ember_simple_auth:session"]).authenticated.token

 },
  host: 'https://saywhat-api.herokuapp.com'  // headers: {
  //   'Content-type': 'x-www-form-urlencoded' // workaround for laravel
  // }
})
