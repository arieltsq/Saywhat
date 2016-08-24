import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init: function () {
    this._super(...arguments);
    if(!this.translations) {
      window.location.reload()
    }
  },
  willDestroyElement() {
    this._super(...arguments);
    window.location.reload()
  },
  actions: {
    showTranslation: function (){
      console.log("im being clicked")
      console.log('hi', window.localStorage.id)

      var num = parseInt(window.localStorage.id,10)
      var filter = this.get('translations').filterBy('phrase.id', parseInt(window.localStorage.id))
      console.log(filter.length)
      if(filter.length == 0){
        console.log("empty")
        this.set('label', "No Results found, Add a phrase to it")
      }
      else {
        this.set('results',this.get('translations').filterBy('phrase.id', parseInt(window.localStorage.id)))
        console.log("not empty")
      }
      // if (filter ){
      //   console.log('empty')
      // }
      // else{
      //   console.log("hello")
      // }
      // this.set('results',this.get('translations').filterBy('phrase.id', parseInt(window.localStorage.id)))
      // console.log(this.set('results',this.get('translations').filterBy('phrase.id', parseInt(window.localStorage.id))))

      // window.localStorage.id = params
    }
  }
});
