Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

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

Router.route('/profile', {
  name: 'profile'
});

Router.route('/userlist', {
  name: 'userlist',
  waitOn: function() { return Meteor.subscribe('allUsers') },
  data: {
    users: Meteor.users.find()
  }
});

Router.onBeforeAction(function () {
  if(!Meteor.user()) {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('login');
    }
  } else {
    this.next();
  }
}, {
  except: ['register', 'resetPassword']
});
