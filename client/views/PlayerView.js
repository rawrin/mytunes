// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {

  },

  events: {
    'ended': function() {
      //if songQueue has song in position 0, play (set currentSong to song)
      //dequeue/shift off index 0,
      //delete from html
      this.model.dequeue();
      console.log("IT ENDED!");
    } 

  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
