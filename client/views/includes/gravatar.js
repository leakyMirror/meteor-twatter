Template.gravatar.helpers({
  // TODO: try to refactor this mess
  gravatarUrl: function(size) {
    if(this.emails && this.emails[0] && this.emails[0].address) {
      var mail = this.emails[0].address
        , hash = gravatarHash(mail)
      return 'http://www.gravatar.com/avatar/' + hash + '/?s=128'
    } else {
      var hash = this.gravatarHash || ''
      return 'http://www.gravatar.com/avatar/' + hash + '/?s=64'
    }
  }
});
