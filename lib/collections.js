Twatts = new Meteor.Collection('twatts');

Twatts.allow({
  insert: function(userId, twatt) { return ownsTwatt(userId, twatt); }
});