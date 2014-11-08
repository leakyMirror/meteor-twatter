Template.header.helpers({
  loggedIn: function() {
    return !!Meteor.userId();
  },
  username: function() {
    return Meteor.user() && Meteor.user().username;
  }
});

Template.header.events({
  'click #logout-btn': function(event, tpl) {
    Meteor.logout();
  }
});