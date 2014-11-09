Template.log.helpers({
  print: function() {
    console.log(this);
    return JSON.stringify(this);
  }
});
