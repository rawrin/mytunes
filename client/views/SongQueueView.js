var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});


