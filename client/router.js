Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'stream'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/register', {
  name: 'register'
});

Router.route('/profile', {
  name: 'profile'
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
