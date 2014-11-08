Template.recoverPassword.helpers({
  resetPassword: function() {
    return Session.get('resetPassword');
  }
});

if(Accounts._resetPasswordToken) {
  console.log('here');
  Session.set('resetPassword', Accounts._resetPasswordToken);
}

Template.recoverPassword.events({
  'submit #recovery-form': function(event, tpl) {
    event.preventDefault();

    var email = trimString(tpl.find('#recovery-email').value);

    if(isValidEmail(email)) {
      Session.set('loading', true);
      Accounts.forgotPassword({email: email}, function(err) {
        if(err) {
          toastr.error('Password Reset Error');
        } else {
          toastr.success('Instructions sent, check your email.');
        }
        Session.set('loading', false);
      });

      return false;
    }
  },

  'submit #new-password': function(event, tpl) {
    event.preventDefault();

    var password = trimString(tpl.find('#new-password-prompt').value);

    if(isValidPassword(password)) {
      Session.set('loading', true);
      Accounts.resetPassword(Session.get('resetPassword'), password, function(err) {
        if(err) {
          toastr.warning('Password Reset Error, sorry');
        } else {
          Session.set('resetPassword', null);
        }
        Session.set('loading', false);
      });

      return false;
    }
  } 
});