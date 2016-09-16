Meteor.publish('awesomeThings', function() {
	return Things.find({});
});
