import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  // this.route('users', function() {});
  // this.resource('users');

  this.route('users', function() {
    this.route('create');
  });

  this.route('phrases', function() {
    this.route('create');

    this.route('show', {  path: ':phrase_id'  });
     this.route('edit', { path: '/:phrase_id/edit' });
  });

  this.route('translations', function() {
    this.route('new', {
      path: ':phrase_id'
    });
  });

});

export default Router;
