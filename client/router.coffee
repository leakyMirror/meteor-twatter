Router.configure
  layoutTemplate: 'layout'
  notFoundTemplate: 'notFound'
  loadingTemplate: 'loading'

Router.map ->
  @route 'home',
    path: '/'
    # waitOn: -> [Meteor.subscribe 'name']
