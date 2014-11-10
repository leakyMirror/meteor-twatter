function saveTwatt() {
  var text = trimString($('#twatt-input').val());
  if(text.length) {
    $('#twatt-input').val('');

    if(Meteor.user() && Meteor.user().emails) {
      var mail = Meteor.user().emails[0].address

      var twatt = {
        userId: Meteor.userId(),
        username: Meteor.user().username,
        gravatarHash: gravatarHash(mail),
        date: new Date().getTime(),
        text: text };

      Twatts.insert(twatt);
    }
  }
}

Template.twattForm.events({
  'click #save-twatt': saveTwatt,
  'keypress #twatt-input': function(event, tpl) {
    if(event.keyCode === 13 || event.which === 13)
      saveTwatt();
  }
});
