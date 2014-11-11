Template.registerHelper('equal', function(a,b) {
  return a === b
});

Template.registerHelper('log', function(a) {
  console.log(a)
});

Template.registerHelper('isCurrentUser', function() {
  var user = this;
  return user._id === Meteor.user()._id;
});

Template.registerHelper('isFollowed', function() {
  if(Meteor.user()) {
    var user = this;
    return _.contains(Meteor.user().profile.following, user._id);
  } else return false
});
