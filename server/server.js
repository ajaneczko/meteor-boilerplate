ServiceConfiguration.configurations.upsert({service:'github'},
{$set: {
  clientId:'clientId',
  secret:'secret',
  loginStyle:'popup'
  }
});

function getUserInfo (accessToken) {
  let result = HTTP.get("https://api.github.com/user", {
    headers: {
      'User-Agent': 'Meteor'
    },

    params: {
      access_token: accessToken
    }
  });

  return _.pick(result.data, 'login', 'email');
}

Accounts.onCreateUser((options, user) => {
  user.profile = getUserInfo(user.services.github.accessToken);
  user.login = user.profile.email;
  user.email = user.profile.email;
  user.avatar = user.profile.avatar_url;
  return user;
});

Accounts.onLogin((loginInfo) => {
  let user = loginInfo.user;
  let accessToken = user.services.github.accessToken;
  let userInfo = getUserInfo(accessToken);
  Meteor.users.update({_id: user._id}, {
    $set: {
      profile: userInfo,
      login: userInfo.login,
      email: userInfo.email
    }
 });
});


Meteor.publish('user', function () {
   return Meteor.users.find({_id: this.userId}, {fields: {_id: 1, profile: 1, login: 1, email: 1}});
 });
