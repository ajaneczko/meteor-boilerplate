Template.header.rendered = function () {
  let user = Meteor.user()
  console.log(user.profile.email)
},

Template.header.helpers({
  isLoggedIn: function() {
    if (Meteor.userId())
      return true
    else
      return false
  },
  currentUser: function() {
   return Meteor.user();
 }
});

Template.LoginMenu.events({
  'click [data-action=login]'(e, tmpl) {
    e.preventDefault();
    Meteor.loginWithGithub({requestPermissions:['email']});
  },
  'click [data-action=logout]'(e, tmpl) {
    e.preventDefault();
    Meteor.logout();
  }

})

Template.LoginMenu.helpers({
  isLoginServicesConfigured(){
    return Accounts.loginServicesConfigured();
  },
  currentUser: function() {
   return Meteor.user();
 }
})
