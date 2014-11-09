Twatts = new Meteor.Collection('twatts');

Twatts.allow({
  insert: function(userId, twatt) {
    // return ownsTwatt(userId, twatt);
    return true;
  },
  remove: function(userId, twatt) {
    return ownsTwatt(userId, twatt);
  }
});
