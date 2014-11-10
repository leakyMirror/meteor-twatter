Template.followButton.helpers({
  isFollowed: function() {
    if(Meteor.user())
      var user = this
      return _.contains(Meteor.user().profile.followedUsers, user._id);
  },
  isCurrentUser: function() {
    var user = this
    return user._id === Meteor.user()._id
  }
});

Template.followButton.events({
  'click .follow-btn': function(e,t) {
    var state = $(e.currentTarget).text();
    if(state === 'Follow')
      Meteor.call('follow', { userId: Meteor.userId(), userToFollow: this._id }, function() {
        toastr.success("You're now following " + this.username + "!", "Awesome!");
      }.bind(this));
    if(state === 'Followed')
      Meteor.call('unfollow', { userId: Meteor.userId(), userToUnfollow: this._id }, function() {
        toastr.success("You just left " + this.username + " on his own, you bastard!");
      }.bind(this));
  }
});

