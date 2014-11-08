Template.twattForm.helpers({
  twatts: Twatts.find()
});

Template.twattForm.events({
  'click #save-twatt': function(event, tpl) {
    var text = trimString($('#twatt-input').val());
    if(text.length) {
      $('#twatt-input').val('');
      Twatts.insert({ authorId: Meteor.userId(), username: Meteor.user().username, text: text });
    };
  },
  'keypress #twatt-input': function(event, tpl) {
    if(event.keyCode === 13 || event.which === 13) {
      var text = trimString($('#twatt-input').val());
      if(text.length) {
        $('#twatt-input').val('');
        Twatts.insert({ authorId: Meteor.userId(), username: Meteor.user().username, text: text });
      }
    }
  }
});
