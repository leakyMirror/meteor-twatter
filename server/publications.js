Meteor.publish('twattsAuthored', function(userId) {
  return Twatts.find({ authorId: userId });
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find({}, {
    fields: {
      username: 1,
      emails: 1
    }
  });
});
