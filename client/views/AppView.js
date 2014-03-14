// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  template: _.template('<i>Now Playing</i>:&nbsp<%= artist %>&nbsp-&nbsp<%= title %>'),

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      if(this.model.get('songQueue').first()){
        $('.nowPlaying').html(this.template(this.model.get('currentSong').attributes));
      }
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
