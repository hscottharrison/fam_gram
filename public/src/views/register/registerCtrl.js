angular.module('famgram').controller('registerCtrl', function($scope, $state, registerService){

  registerService.getBranches()
  .then(function(response){
    $scope.branches = response.data
  })

  $scope.createUser = function(user){
    registerService.createUser(user)
    .then(function(response){
      alert('Great! Your Profile has been Created!')
      $state.go('login')
    })
  }

})
