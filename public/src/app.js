angular.module('famgram', ['ui.router', 'ui.materialize'])

.config(($urlRouterProvider, $stateProvider) => {


  //set home route
  $urlRouterProvider.otherwise('/login')
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: './src/views/login/login.html',
    controller: 'loginCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: './src/views/register/register.html',
    controller: 'registerCtrl'
  })
  .state('timeline', {
    url: '/timeline/:id',
    templateUrl: './src/views/timeline/timeline.html',
    controller: 'timelineCtrl'
  })
  .state('post', {
    url: '/post/:id',
    templateUrl: './src/views/post/post.html',
    controller: 'postCtrl'
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: './src/views/profile/profile.html',
    controller: 'timelineCtrl'
  })
  .state('editprof', {
    url: '/addpic/:id',
    templateUrl: './src/views/profile/editprof.html',
    parent: 'profile',
    controller: 'profCtrl'
  })
})
