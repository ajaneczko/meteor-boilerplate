ApplicationController = RouteController.extend({
  layoutTemplate: 'ApplicationLayout',
});

Router.configure({
	loadingTemplate: 'loading',
});

Router.onBeforeAction('loading');

Router.route('/', {

  name:'main',
  template:'main',
  waitOn: function() {
		return Meteor.subscribe('awesomeThings');
	},
   data: function() {
    let awesomeThings = Things.find({}).fetch()
    return awesomeThings;
  }
})

Router.route('/awesomeThings/:thing', {
	name: 'thing',
	template: 'thing',
  waitOn: function() {
    return Meteor.subscribe('awesomeThings');
  },
  data: function() {
    let thing = this.params.thing;
    return thing;
  }
});
