Template.thing.rendered = function(){
  Session.set('thingId', this.data)
}

Template.thing.helpers({
  thing: function() {
    let awesomeThing = {}
    if (Session.get('thingId')) {

      awesomeThing = Things.find({_id:Session.get('thingId')}).fetch()
      console.log(awesomeThing)
    }

    return awesomeThing[0]
  }
})
