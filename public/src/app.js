angular.module('famgram', ['ui.router'])

.config(($urlRouterProvider, $stateProvider) => {


  //set home route
  $urlRouterProvider.otherwise('/login')
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: './src/views/login/login.html',
    controller: 'loginCtrl'
  })
})
