angular.module('firebase.config', [])
  .constant('FBURL', 'https://learncode-7f626.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','google'])

  .constant('loginRedirectPath', '/login');
