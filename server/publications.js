Meteor.publish('userStream', function(params) {
  if(!params) return []
  check(params, { username: String, following: Array })

  followed = params.following;
  followed.push(params.username);

  console.log('stream publication hit')

  return Twatts.find(
    { username: { $in: followed }},
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
  console.log('user profile publication hit')
  return Meteor.users.find({ username: username })
});

Meteor.publish('relatedUsers', function(params) {
  check(params, { type: String, username: String })
  var user = Meteor.users.findOne({ username: params.username })

  if(user) {
    var list = user.profile[params.type], // type is 'following' or 'followers'
        filteredList = _.filter(list, function(username) { return username !== user.username })

    return Meteor.users.find({ username: { $in: filteredList } })
  }
});
