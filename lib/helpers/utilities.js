trimString = function(string) {
  return string.replace(/^\s*|\s*$/g, "");
};

// TODO: better validation
isValidPassword = function(string) {
  return string.length >= 4 ? true : false;
};

ownsTwatt = function(userId, twatt) {
  return twatt & twatt.authorId === userId;
};
