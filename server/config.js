Meteor.startup(function () {
  // process.env.MAIL_URL = 'smtp://your_username:your_password@smtp.gmail.com:25';
});

Accounts.emailTemplates.resetPassword.text = function(user, url) {
  url = url.replace('#/', '');
  return "Click this link to reset your password: " + url;
};