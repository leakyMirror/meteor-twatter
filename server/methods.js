Meteor.methods({
  follow: function(params, callback) {
    if(Meteor.userId() !== params.userId) return false
    if(params.userId === params.userToFollow) return false

    Meteor.users.update(
      { _id: params.userId },
      { $addToSet: { 'profile.followedUsers': params.userToFollow }}
    );

    Meteor.users.update(
      { _id: params.userToFollow },
      { $addToSet: { 'profile.followers': params.userId }},
      function() {
        callback.call(null);
      }
    );
  },

  unfollow: function(params) {
    if(Meteor.userId() !== params.userId) return false;

    Meteor.users.update(
      { _id: params.userId },
      { $pull: { 'profile.followedUsers': params.userToUnfollow }}
    );

    Meteor.users.update(
      { _id: params.userToUnfollow },
      { $pull: { 'profile.followers': params.userId }}
    );
  },

  removeTwatt: function(params) {
    Twatts.remove(params.id);
  },

  updateProfile: function(params, callback) {
    Meteor.users.update({
      username: params.username
    }, {
      $set: {
        'profile.realname': params.realname,
        'profile.bio': params.bio
      }
    }, function() {
      callback.call(null);
    });
  }
});
