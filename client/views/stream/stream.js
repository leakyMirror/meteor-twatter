Template.write.events({
  'click .send': function() {
    var text = $('.message-field').val();
    $('.message-field').val('');
    console.log('Message:' + text);
    Twatts.insert({ authorId: Meteor.userId(), username: Meteor.user().username, text: text });
  }
});
