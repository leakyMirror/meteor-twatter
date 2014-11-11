Meteor.publish('streamForUser', function(user) {
  var userData = Meteor.users.findOne({ _id: user._id }),
      followed = userData.profile.following || [];

  followed.push(user._id);

  return Twatts.find(
    { userId: { $in: followed }},
    { sort: { date: -1 }}
  );
});

Meteor.publish('allUsers', function(user) {
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
      { sort: { date: -1 } }
    );
  }
});

Meteor.publish('relatedUsers', function(params) {
  check(params, { type: String, username: String })
  var user = Meteor.users.findOne({ username: params.username })

  if(user) {
    var list = user.profile[params.type], // type is 'following' or 'followers'
        filteredList = _.filter(list, function(d) { return d._id !== user._id })

    return []
  }
});
