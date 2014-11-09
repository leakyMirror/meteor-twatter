Template.followButton.helpers({
  isFollowed: function() {
    if(Meteor.user())
      return _.contains(Meteor.user().profile.followedUsers, this._id);
  }
});

Template.followButton.events({
  'click .follow-btn': function(e,t) {
    var state = $(e.currentTarget).text();
    if(state === 'Follow')
      Meteor.call('follow', { userId: Meteor.userId(), userToFollow: this._id });
    if(state === 'Followed')
      Meteor.call('unfollow', { userId: Meteor.userId(), userToUnfollow: this._id });
  }
});

Template.log.helpers({
  print: function() { console.log(this) }
})
