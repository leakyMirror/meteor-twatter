Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/register', {
  name: 'register'
});

Router.route('/', {
  name: 'stream',
  waitOn: function() { return Meteor.subscribe('twattsAuthored', Meteor.userId()); },
  data: function() { return Twatts.find(); }
});

Router.route('/profile', {
  name: 'profile'
});

Router.route('/userlist', {
  name: 'userlist'
});

Router.onBeforeAction(function () {
  if(!Meteor.user()) {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      if(this.url !== '/register') {
        this.render('login');
      } else {
        this.render('register');
      }
    }
  } else {
    this.next();
  }
});
