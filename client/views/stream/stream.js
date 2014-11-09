function saveTwatt() {
  var text = trimString($('#twatt-input').val());
  if(text.length) {
    $('#twatt-input').val('');
    var twatt = {
      userId: Meteor.userId(),
      username: Meteor.user().username,
      date: new Date().getTime(),
      text: text };

    Twatts.insert(twatt);
  };
};

Template.twattForm.events({
  'click #save-twatt': saveTwatt,
  'keypress #twatt-input': function(event, tpl) {
    if(event.keyCode === 13 || event.which === 13)
      saveTwatt()
  }
});

Template.profileSidebar.helpers({
  username: Meteor.user() && Meteor.user().username
});
