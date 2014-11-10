Template.profileNumbers.helpers({
  twattsCount: function() {
    return Twatts.find({ username: this.username }).count();
  }
});
