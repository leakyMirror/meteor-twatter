Template.userlist.helpers({
  users: Meteor.users.find(),
  isFollowed: function(userId) {
    return _.contains(Meteor.user().usersToFollow, userId)
  }
});

Template.userlist.events({
  'click .follow-btn': function(e,t) {
    var state = $(e.currentTarget).text()
    if(state === 'Follow')
      Meteor.call('follow', { userId: Meteor.userId(), userToFollow: this._id })
    if(state === 'Followed')
      Meteor.call('unfollow', { userId: Meteor.userId(), userToUnfollow: this._id })
  }
});
