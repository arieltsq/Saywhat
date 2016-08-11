import DS from 'ember-data';

export default DS.Model.extend({
  language: DS.attr(),
  name: DS.attr(),
  phrase: DS.attr(),
  user_id: DS.attr(),
  phrase_id: DS.attr()
});
