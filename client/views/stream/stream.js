function saveTwatt() {
  var text = trimString($('#twatt-input').val());
  if(text.length) {
    $('#twatt-input').val('');
    var twatt = {
      authorId: Meteor.userId(),
      author: Meteor.user().username,
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
