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

Meteor.publish('connectedUsers', function(params) {
  var user = Meteor.users.findOne({ username: params.username })
  if(user) {
    var fields =  { username: 1, emails: 1, profile: 1 }
    var list = user.profile[params.type]; // type is 'following' or 'followers'
    console.log(list)
    // a = Meteor.users.find({ _id: { $in: list } }, { fields: fields });
    a = Meteor.users.find()
    return a
  }
});
