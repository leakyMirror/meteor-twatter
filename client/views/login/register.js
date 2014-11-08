Template.register.events({
  'submit #register-form': function(event, tpl) {
    event.preventDefault();

    var email = trimString(tpl.find('#account-email').value),
        password = tpl.find('#account-password').value;

    if(isValidPassword(password)) {
      Accounts.createUser({ email: email, password: password }, function(err) {
        if(err) {
          console.log("could not create user");
        } else {
          Router.go('stream');
          console.log("user created successfully");
        }
      });
    }

    return false;
  }
});