Meteor.methods({
  follow: function(params) {
    if(Meteor.userId() !== params.userId) return false
    if(params.userId === params.userToFollow) return false

    Meteor.users.update(
      { _id: params.userId },
      { $addToSet: { usersToFollow: params.userToFollow }}
    )

    Meteor.users.update(
      { _id: params.userToFollow },
      { $addToSet: { followers: params.userId }}
    )
  },

  unfollow: function(params) {
    if(Meteor.userId() !== params.userId) return false

    Meteor.users.update(
      { _id: params.userId },
      { $pull: { usersToFollow: params.userToUnfollow }}
    )

    Meteor.user.update(
      { _id: params.userToFollow },
      { $pull: { followers: params.userId }}
    )
  }
})