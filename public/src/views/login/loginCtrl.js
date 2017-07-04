angular.module('famgram').controller('loginCtrl', function($scope, $state, loginService){

  $scope.authenticate = function(user){
    loginService.authenticate(user).then(function(response){
      console.log(response)
      if(response.data.userFound){
        $state.go('timeline', {id: response.data.user.user_id})
      }
      else{
        alert('Incorrect username or password')
      }
    })
  }


})
