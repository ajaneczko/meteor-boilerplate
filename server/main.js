import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Things.remove({})

  let awesomeThings = [
      {name: 'Javascript'},
      {name:'MeteorJS'},
      {name: 'Redux'},
      {name: 'HTML'},
      {name: 'React'}
  ]

  addThing = function (item) {
    thingName = item.name
    console.log('Adding new item ' + item.name)

    return Meteor.call('newThing',item.name, function(error, result) {
        if(result) {
          console.log(result)
        } else if (error) {
          console.log(error)
        }
    })
  }
  awesomeThings.map(addThing)
});
