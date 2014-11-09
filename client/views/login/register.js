Template.register.events({
  'submit #register-form': function(event, tpl) {
    event.preventDefault();

    var
        username             = trimString(tpl.find('#username').value),
        email                = trimString(tpl.find('#email').value),
        password             = trimString(tpl.find('#password').value),
        passwordConfirmation = trimString(tpl.find('#password-confirmation').value),
        isRegistrationValid  = true,
        toastrOptions = {
          'closeButton': false,
          'positionClass': 'toast-top-right',
          'onclick': null,
          'showDuration': '100',
          'hideDuration': '1000',
          'timeOut': '5000',
          'extendedTimeOut': '1000',
        };

    if(username.length < 4) {
      toastr.error('Username must be at least 4 characters long', '', toastrOptions);
      isRegistrationValid = false;
    }
    if(!isValidPassword(password)) {
      toastr.error('Password must be at least 4 characters long', '', toastrOptions);
      isRegistrationValid = false;
    }
    if (password !== passwordConfirmation) {
      toastr.error("The password and its match doesn't match", '', toastrOptions);
      isRegistrationValid = false;
    }
    if (!isValidEmail(email)) {
      toastr.error('Email seems to be invalid', '', toastrOptions);
      isRegistrationValid = false;
    }
    if (!isUsernameUnique(username)) {
      toastr.error('This username is taken, try another', '', toastrOptions);
      isRegistrationValid = false;
    }

    if (!isEmailUnique(email)) {
      toastr.error('This email is already in use, try another', '', toastrOptions);
      isRegistrationValid = false;
    }

    if(isRegistrationValid) {
      var userData = {
        username: username,
        email: email,
        password: password,
        profile: {
          followers: [],
          followedUsers: [],
          bio: ''
        }
      }

      Accounts.createUser(userData, function(err) {
        if(err) {
          toastr.error(err.reason, '', toastrOptions);
        } else {
          Router.go('stream');
          console.log('user created successfully');
        }
      });
    }

    return false;
  }
});