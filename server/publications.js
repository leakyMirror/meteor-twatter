Meteor.publish('streamForUser', function(user) {
  var userData = Meteor.users.findOne({ _id: user._id }),
      followed = userData.usersToFollow || [];

  followed.push(user._id);

  return Twatts.find(
      { userId: { $in: followed }},
      { sort: { date: -1 }}
    );
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
