angular.module('famgram').service('loginService', function($http){
  this.loggedIn = false;
  this.authenticate = function(user){
    return $http.post('/api/login', user)
    .then(function(response){
      // this.loggedIn = response.data.userFound
      return response;
    })
  };

  this.login = function(user){
    console.log(user)
    return $http.post('/api/loggedin', user)
  }

  this.whoLogin = function(params){
    return $http.post('/api/whologgedin', params)
  }

  this.logout = function(id){
    return $http.delete(`/api/login/${id}`)
  }

})
