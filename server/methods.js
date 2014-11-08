Meteor.methods({
  follow: function(params) {
    if(Meteor.userId() !== params.userId) return false
    if(params.userId === params.userToFollow) return false

    Meteor.users.update(
      { _id: params.userId },
      { $addToSet: { usersToFollow: params.userToFollow }}
    )
  },

  unfollow: function(params) {
    if(Meteor.userId() !== params.userId) return false

    Meteor.users.update(
      { _id: params.userId },
      { $pull: { usersToFollow: params.userToUnfollow }}
    )
  }
})