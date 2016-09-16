Things = new Meteor.Collection("things");
var awsomeThings = Things.find({});

Things.allow({
    'insert': function (doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true;
     },
     'update': function (doc) { return true },
     'remove': function (doc) {
       /* user and doc checks ,
       return true to allow insert */
       return true;
     }
});


Meteor.methods({
  removeAll:function() {
    return Things.remove({})
  },
  newThing: function(name) {
    console.log(name)
    return Things.insert({
      name: name,
      createdAt: new Date()
    })
  },
})
