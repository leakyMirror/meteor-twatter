Template.resetPassword.helpers({
  resetPassword: function() {
    return Session.get('resetPassword');
  }
});

Template.resetPassword.events({
  'submit #reset-form': function(event, tpl) {
    event.preventDefault();

    var email = trimString(tpl.find('#reset-email').value);

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
          console.log(err);
          toastr.error(err.reason, 'Password Reset Error');
        } else {
          Session.set('resetPassword', null);
          toastr.success('Use the new one to login.', 'Password changed!');
          Router.go('login');
        }
        Session.set('loading', false);
      });

      return false;
    }
  } 
});