// process.env.MAIL_URL = ;

Accounts.emailTemplates.resetPassword.text = function(user, url) {
  return "Click this link to reset your password: /recover-password/" + new Date();
};