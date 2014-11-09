Meteor.publish('streamForUser', function(user) {
  var userData = Meteor.users.findOne({ _id: user._id }),
      followed = userData.profile.followedUsers || [];

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
      profile: 1
    }
  });
});

Meteor.publish('ownTwatts', function(username) {
  if(username && username) {
    return Twatts.find(
      { username: username },
      { sort: { date: -1 }}
    );
  }
});
