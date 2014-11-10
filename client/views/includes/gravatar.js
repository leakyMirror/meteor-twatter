Template.gravatar.helpers({
  gravatarUrl: function(size) {
    var that = this.context
    if(that.emails && that.emails[0] && that.emails[0].address) {
      var mail = that.emails[0].address
        , hash = gravatarHash(mail)
    } else
      var hash = that.gravatarHash || ''

    return 'http://www.gravatar.com/avatar/' + hash + '/?s=' + size
  }
});
