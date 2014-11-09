Twatts = new Meteor.Collection('twatts');

// TODO: this should be on server only, see: https://docs.meteor.com/#/full/dataandsecurity
Twatts.allow({
  insert: function(userId, twatt) {
    // return ownsTwatt(userId, twatt);
    return true
  }
});
