var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.collection.on('add', function() {
    this.render();
    }, this);

    this.collection.on('remove', function() {
    this.render();
    }, this);

  },

  // events: {
  //   'songEnded': function(){console.log('Song added')} 

  // },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});


