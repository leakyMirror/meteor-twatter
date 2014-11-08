Template.header.helpers({
  currentUser: function() {
    return !Meteor.userId();
  }
});