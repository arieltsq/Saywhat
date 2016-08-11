import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('indiv-translation', 'Integration | Component | indiv translation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{indiv-translation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#indiv-translation}}
      template block text
    {{/indiv-translation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
