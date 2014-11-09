trimString = function(string) {
  return string.replace(/^\s*|\s*$/g, "");
};

isValidEmail = function(email) {
  return /^\S+@\S+\.\S+$/.test(email);
};

isValidPassword = function(string) {
  return string.length >= 4 ? true : false;
};

isUsernameUnique = function(username) {
  return !Meteor.users.findOne({username: username});
};

isEmailUnique = function(email) {
  return !Meteor.users.findOne({
    emails: {
      $elemMatch: {
        address: email
      }
    }
  });
};

ownsTwatt = function(userId, twatt) {
  return twatt & twatt.userId === userId;
};
