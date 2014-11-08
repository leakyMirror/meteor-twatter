var twatts = [
  { author: 'Justas', text: 'Hello world' },
  { author: 'Justas', text: 'Hello world' },
];

Template.write.events({
  'click .send': function() {
    var text = $('.message-field').val();
    $('.message-field').val('');
    // twatts.push({ author: Meteor.userId(), text: text });
    console.log(text);
  }
})

Template.twatts.helpers({
  twatts: function() { return twatts }
});

