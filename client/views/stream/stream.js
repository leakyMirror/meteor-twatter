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
  }
}

Template.twattForm.events({
  'click #save-twatt': saveTwatt,
  'keypress #twatt-input': function(event, tpl) {
    if(event.keyCode === 13 || event.which === 13)
      saveTwatt();
  }
});

Template.twattList.helpers({
  ownTwatt: function(twatt) {
    return twatt.username === Meteor.user().username;
  }
});

Template.twattList.events({
  'click #remove-twatt': function(event, tpl) {
    swal(
      {
        title: "",
        text: "Surelly you can't be serious?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "I am serious!",
        cancelButtonText: "Nope",
        closeOnCancel: true
        // allowOutsideClick: true // this is buggy
      },
      function(isConfirm) {
        Meteor.call('removeTwatt', { id: this._id });
      }.bind(this)
    );
  }
});

Template.profileNumbers.helpers({
  twattsCount: function() {
    return Twatts.find({ username: Meteor.user().username }).count();
  }
});
