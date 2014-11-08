var tweets = [
  { author: 'Justas', tweet: 'Hello world' },
  { author: 'Justas', tweet: 'Hello world' },
];

Template.stream.helpers({
  message: tweets
});
