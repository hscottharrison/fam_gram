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
    controller: 'timelineCtrl',
    resolve:{
      isLoggedin: function(loginService, $state, $stateParams){
        loginService.whoLogin($stateParams).then(function(response){
          if(!response.data.whologgedin){
            alert("You are not logged in. Please login and try again!")
            $state.go('login')
          }
        })
      }
    }
  })
  .state('post', {
    url: '/post/:id',
    templateUrl: './src/views/post/post.html',
    parent: 'timeline',
    controller: 'postCtrl'
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: './src/views/profile/profile.html',
    controller: 'timelineCtrl',
    resolve:{
      isLoggedin: function(loginService, $state, $stateParams){
        loginService.whoLogin($stateParams).then(function(response){
          if(!response.data.whologgedin){
            alert("You are not logged in. Please login and try again!")
            $state.go('login')
          }
        })
      }
    }
  })
  .state('editprof', {
    url: '/addpic/:id',
    templateUrl: './src/views/profile/editprof.html',
    parent: 'profile',
    controller: 'profCtrl'
  })
  .state('viewpost', {
    url: '/viewpost/:post_id',
    templateUrl: './src/views/profile/viewpost.html',
    parent: 'profile',
    controller: 'getoneCtrl'
  })
  .state('viewprof', {
    url: '/viewprof/:id/:username',
    templateUrl: './src/views/view_profile/viewprof.html',
    controller: 'viewprofCtrl'
  })
})
.directive('navDir', function(){
  return{
   templateUrl: './src/views/nav/navdir.html',
   controller: 'timelineCtrl'
  }
})
