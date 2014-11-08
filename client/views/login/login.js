Template.login.events({
  'submit #login-form': function(event, tpl) {
    event.preventDefault();

    var username = tpl.find('#username').value,
        password = tpl.find('#password').value;

    Meteor.loginWithPassword(username, password, function(err) {
      if(err) {
        console.log("could not login");
      } else {
        Router.go('stream');
        console.log("logged in");
      }
    });

    return false;
  },
  'click #display-register-form': function(event, tpl) {
    Blaze.render('register');
  }
});