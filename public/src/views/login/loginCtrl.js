angular.module('famgram').controller('loginCtrl', function($scope, $state, $stateParams, loginService){
  $scope.userFound;
  $scope.authenticate = function(user){
    loginService.authenticate(user).then(function(response){
      if(response.data.userFound){
        $scope.userFound = response.data.user.user_id;
        loginService.login(response.data.user).then(function(response){
          console.log(response)
          $state.go('timeline', {id: $scope.userFound})
        })

      }
      else{
        alert('Incorrect username or password')
      }
    })
  }




})
