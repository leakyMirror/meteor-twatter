Template.followButton.events({
  'click .follow-btn': function(e,t) {
    var state = $(e.currentTarget).text();
    if(state === 'Follow')
      Meteor.call('follow', { username: Meteor.user().username, userToFollow: this.username }, function() {
        toastr.success("You're now following " + this.username + "!", "Awesome!");
      }.bind(this));
    if(state === 'Followed')
      Meteor.call('unfollow', { username: Meteor.user().username, userToUnfollow: this.username }, function() {
        toastr.success("You just left " + this.username + " on his own, you bastard!");
      }.bind(this));
  }
});

