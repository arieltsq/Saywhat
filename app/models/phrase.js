import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  user_id:DS.attr()
});
