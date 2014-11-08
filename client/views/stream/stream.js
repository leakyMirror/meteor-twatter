Template.write.events({
  'click #save-twatt': function(event, tpl) {
    var text = $('#twatt-input').val();
    $('#twatt-input').val('');
    Twatts.insert({ authorId: Meteor.userId(), username: Meteor.user().username, text: text });
  },
  'keypress #twatt-input': function(event, tpl) {
    if(event.keyCode === 13 || event.which === 13) {
      var text = $('#twatt-input').val();
      $('#twatt-input').val('');
      Twatts.insert({ authorId: Meteor.userId(), username: Meteor.user().username, text: text });
    }
  }
});
