import Ember from 'ember';

export default Ember.Controller.extend({
  emailValidation: {
  'errorMessage': 'Please provide email in a valid format',
  'isError': (inputValue) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return !emailPattern.test(inputValue);
  }
}
});
