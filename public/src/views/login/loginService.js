angular.module('famgram').service('loginService', function($http){
  this.loggedIn = false;
  this.authenticate = function(user){
    return $http.post('/api/login', user)
    .then(function(response){
      this.loggedIn = response.data.userFound
      return response;
    })
  };

})
