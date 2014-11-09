Meteor.publish('streamForUser', function(userId) {
  var followed = Meteor.users.findOne({ _id: userId })//.usersToFollow

  if(followed && followed.usersToFollow)
    followed.push(userId)

  return Twatts.find(
    { authorId: { $in: followed }},
    { sort: { date: -1 }})
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find({}, {
    fields: {
      username: 1,
      emails: 1,
      usersToFollow: 1
    }
  });
});
