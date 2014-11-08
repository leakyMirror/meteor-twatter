Meteor.publish('twattsAuthored', function(userId) {
  return Twatts.find({ authorId: userId });
});
