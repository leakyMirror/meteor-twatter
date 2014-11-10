Template.twattList.helpers({
  ownsTwatt: function(twatt) {
    return twatt.username === Meteor.user().username;
  }
});

Template.twattList.events({
  'click #remove-twatt': function(event, tpl) {
    swal(
      {
        title: '',
        text: "Surelly you can't be serious?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'I am serious!',
        cancelButtonText: 'Nope',
        closeOnCancel: true
        // allowOutsideClick: true // this is buggy
      },
      function(isConfirm) {
        Meteor.call('removeTwatt', { id: this._id });
      }.bind(this)
    );
  }
});
