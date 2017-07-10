angular.module('famgram').service('profileService', function($http){

  this.updateProfile = function(update){
    return $http.put('/api/users', update)
  }

})
