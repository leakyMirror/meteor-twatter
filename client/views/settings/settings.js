Template.settingsForm.events({
  'submit #settings-form': function(event, tpl) {
    event.preventDefault();

    Meteor.call('updateProfile', {
      username: Meteor.user().username,
      realname: trimString(tpl.find('#realname').value),
      bio: trimString(tpl.find('#bio').value)
    }, function() {
      toastr.success('Profile saved!');
    });

    return false;
  }
});