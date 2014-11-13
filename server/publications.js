Meteor.publish('userStream', function(params) {
  if(!params) return []
  console.log(params)
  check(params, { _id: String, following: Array })

  followed = params.following;
  followed.push(params._id);

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

Meteor.publish('userProfile', function(username) {
  check(username, String)
  return Meteor.users.find({ username: username })
});

Meteor.publish('relatedUsers', function(params) {
  check(params, { type: String, username: String })
  var user = Meteor.users.findOne({ username: params.username })

  if(user) {
    var list = user.profile[params.type], // type is 'following' or 'followers'
        filteredList = _.filter(list, function(d) { return d._id !== user._id })

    return Meteor.users.find({ _id: { $in: filteredList } })
  }
});
