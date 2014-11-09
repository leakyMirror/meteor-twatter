Meteor.publish('streamForUser', function(user) {
  var userData = Meteor.users.findOne({ _id: user._id }),
      followed = user.usersToFollow || [];

  followed.push(user._id);

  if(user) {
    return Twatts.find(
        { authorId: { $in: followed }},
        { sort: { date: -1 }}
      );
  } else {
    return [];
  }

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
