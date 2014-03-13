// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      console.log("song has been added to queue");
    }, this);

    params.library.on('dequeue', function(){
      this.set('currentSong', this.get('songQueue').shift());
    }, this);
  }

});
