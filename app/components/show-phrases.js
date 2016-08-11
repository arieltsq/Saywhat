import Ember from 'ember'
var getAll

export default Ember.Component.extend({
  store: Ember.inject.service(),
  didReceiveAttrs: function () {
    this._super(...arguments)
    getAll = this.get('phrases').mapBy('name')
    this.set('names', getAll)
    console.log(this.get(name))
  },
  actions: {
    choosePhrase(selectPhrase) {
      this.set('onePhrase', selectPhrase)
      var results = this.get('translations').filterBy('phrase.name', selectPhrase)

      if(results.length === 0){
        console.log("empty")
        this.set('labelMessage', "We're Sorry, there's no available translation at the moment")
        this.set('results', "")
      }
      else{
        console.log("not empty")
                this.set('labelMessage', "")
        this.set('results', this.get('translations').filterBy('phrase.name', selectPhrase))

      }
      // this.set('results', this.get('translations').filterBy('phrase.name', selectPhrase))

    }
  }
})
