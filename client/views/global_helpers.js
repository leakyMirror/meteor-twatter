Template.registerHelper('equal', function(a,b) {
  return a === b
});

Template.registerHelper('log', function(thing) {
  console.log(thing)
});

Template.registerHelper('isCurrentUser', function() {
  var user = this;
  return user.username === Meteor.user().username;
});

Template.registerHelper('isFollowed', function() {
  if(Meteor.user()) {
    var user = this;
    return _.contains(Meteor.user().profile.following, user.username);
  } else return false
});
