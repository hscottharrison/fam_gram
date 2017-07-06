angular.module('famgram').controller('timelineCtrl', function($scope, $state, $stateParams, timelineService){

  timelineService.getPosts()
  .then(function(response){
    console.log(response)
    $scope.posts = response;
  })



    $scope.goPost = function(){
      $state.go('post', {id: $stateParams.id})
    }



})
