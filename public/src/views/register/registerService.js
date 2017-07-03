angular.module('famgram').service('registerService', function($http){

  this.getBranches = function(){
    return $http.get('/api/branches')
  }

  this.createUser = function(user){
    return $http.post('/api/user', user)
  }

})
