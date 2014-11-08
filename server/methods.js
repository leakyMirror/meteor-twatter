Meteor.methods({
  follow: function(params) {
    // TODO: add check if user is the same. ownsdoc?
    // if userToFollow does not exist in array, insert it
    Meteor.users.update(
      { _id: params.user },
      { $addToSet: { usersToFollow: params.userToFollow }}
    )
  }
})