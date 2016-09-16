import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'animate.css/animate.css';

import './main.html';

Template.main.rendered = function(){
  Session.set('awesomeThings', this.data)
}

Template.main.events({
  'click #new-thing-submit': function () {
    event.stopImmediatePropagation();
    let newThingName = $('#new-thing-name').val()
    console.log(newThingName)
    Meteor.call('newThing',newThingName, function(error, result) {
      if(result) {
        console.log(result)
        Session.set('callback', result)
      } else if (error) {
        console.log(error)
      }
  })
  },
});

Template.awesomeThings.helpers({
  things: function() {
    let result = [];
    let awesomeThings = Things.find({}).fetch()
    if (awesomeThings) {
      result = Object.keys(awesomeThings).map(function(k) { return awesomeThings[k] });
    } else {
      result = "Nothing here :( )"
    }
    return result
  }
})

Template.awesomeThings.events({
  'click .thing':function() {
    console.log(this._id)
    Router.go('/awesomeThings/' + this._id);
  }

})
