Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

// TODO: find a better way to organize routes. Current way is too messy.
Router.route('/', {
  name: 'stream',
  waitOn: function() {
    if(Meteor.user()) {
      return Meteor.subscribe('streamForUser', Meteor.user()); }},
  data: {
    twatts: Twatts.find({}, { sort: { date: -1 }})
  }
});

Router.route('/login', {
  name: 'login'
});

Router.onBeforeAction(function() {
  $('body').addClass('login-route');
  this.next();
}, {
  only: ['login']
});

Router.onStop(function() {
  $('body').removeClass('login-route');
}, {
  only: ['login']
});

Router.route('/register', {
  name: 'register',
  data: function() { return Meteor.subscribe('allUsers'); }
});

Router.route('/reset-password/:token?', function() {
  if(this.params.token) {
    Session.set('resetPassword', this.params.token);
  }
  this.render('resetPassword');
}, {
  name: 'resetPassword'
});

Router.route('/userlist', {
  name: 'userlist',
  waitOn: function() { return Meteor.subscribe('allUsers') },
  data: {
    users: Meteor.users.find()
  }
});

Router.route('/profile/:username', {
  name: 'profile',
  waitOn: function() {
    return [
      Meteor.subscribe('ownTwatts', this.params.username),
      Meteor.subscribe('allUsers')
    ]
  }, // TODO: subscribe only for particular user

  data: function() { return {
      user: Meteor.users.findOne({ username: this.params.username }),
      twatts: Twatts.find({}, { sort: { date: -1 }})
    }
  }
});

Router.route('/settings', {
  name: 'settings'
});

Router.route('profile/:username/:type', {
  name: 'followlist',
  waitOn: function() {
    return Meteor.subscribe('relatedUsers', _.pick(this.params, 'username', 'type'))
  },
  data: function() {
    var that = this
    return {
      users: Meteor.users.find(),
      profileOwner: function() { return that.params.username }
    }
  }
});

Router.onBeforeAction(function () {
  if(!Meteor.user()) {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      Router.go('login');
      this.next();
    }
  } else {
    this.next();
  }
}, {
  except: ['register', 'resetPassword']
});
