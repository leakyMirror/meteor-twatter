Template.login.events({
  'submit #login-form': function(event, tpl) {
    event.preventDefault();

    var username = trimString(tpl.find('#username').value),
        password = trimString(tpl.find('#password').value);

    Meteor.loginWithPassword(username, password, function(err) {
      if(err) {
        toastr.error('Wrong login credentials', 'Nope');
      } else {
        Router.go('stream');
      }
    });

    return false;
  },
  'click #display-register-form': function(event, tpl) {
    Router.go('register');
  }
});