Template.login.events({
  'submit #login-form': function(event, tpl) {
    event.preventDefault();

    var email = tpl.find('#login-email').value,
        password = tpl.find('#login-password').value;

    Meteor.loginWithPassword(email, password, function(err) {
      if(err) {
        console.log("could not login");
      } else {
        console.log("logged in");
      }
    });

    return false;
  },
  'click #display-register-form': function(event, tpl) {
    Blaze.render('register');
  }
});