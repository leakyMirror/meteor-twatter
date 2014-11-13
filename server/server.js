if(Meteor.isServer){
  Meteor.startup(function () {
    if(Meteor.users.find().count() === 0) {
      Meteor.users._ensureIndex({ 'username': 1 });
    }
  });
}
