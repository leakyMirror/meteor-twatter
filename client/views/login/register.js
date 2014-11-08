Template.register.events({
  'submit #register-form': function(event, tpl) {
    event.preventDefault();

    var
        username = trimString(tpl.find('#username').value),
        email = trimString(tpl.find('#email').value),
        password = tpl.find('#password').value,
        passwordConfirmation = tpl.find('#password-confirmation').value;

    // TODO: add notifications for invalid form
    if(isValidPassword(password) && password === passwordConfirmation) {
      Accounts.createUser({ username: username, email: email, password: password }, function(err) {
        if(err) {
          console.log("could not create user", err);
        } else {
          Router.go('stream');
          console.log("user created successfully");
        }
      });
    }

    return false;
  }
});