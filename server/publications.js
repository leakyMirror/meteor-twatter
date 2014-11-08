Meteor.publish('twattsAuthored', function(userId) {
  return Twats.find({ authorId: userId })
})