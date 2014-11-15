function saveTwatt(event,tmpl) {
  var returnKey = event.keyCode === 13 || event.which === 13;
  var click = event.keyCode === 1 || event.which === 1;

  if(click || returnKey) {
    var text = trimString($('#twatt-input').val());
    if(text.length) {
      $('#twatt-input').val('');
      Meteor.call('saveTwatt', text);
    }
  }
}

Template.twattForm.events({
  'click #save-twatt': saveTwatt,
  'keypress #twatt-input': saveTwatt
});
