Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'stream'
});

Router.route('/register', {
  name: 'register'
});

Router.onBeforeAction(function () {
  console.log(this);
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
