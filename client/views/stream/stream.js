var twatts = [
  { author: 'Justas', text: 'Hello world' },
  { author: 'Justas', text: 'Hello world' },
];

Template.write.events({
  'click .send': function() {
    var text = $('.message-field').val();
    $('.message-field').val('');
    console.log('Message:' + text);
    Twatts.insert({ authorId: Meteor.userId(), text: text })
  }
});

Template.twatts.twatts_ = function() {
  return Twatts.find();
};
