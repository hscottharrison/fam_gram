angular.module('famgram').service('loginService', function($http){

  this.authenticate = function(user){
    return $http.post('/api/login', user)
  };

})
