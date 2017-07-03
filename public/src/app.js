angular.module('famgram', ['ui.router', 'ui.materialize'])

.config(($urlRouterProvider, $stateProvider) => {


  //set home route
  $urlRouterProvider.otherwise('/login')
  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: './src/views/login/login.html',
    controller: 'loginCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: './src/views/register/register.html',
    controller: 'registerCtrl'
  })
})
