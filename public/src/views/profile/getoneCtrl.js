angular.module('famgram').controller('getoneCtrl', function($scope, profileService, timelineService, $stateParams){

  profileService.getOne($stateParams)
  .then(function(response){
    console.log(response.data)
    $scope.post = response.data;
  })

  $scope.updateLikes = function(like_count, post_id){
    timelineService.updateLikes(like_count, post_id)
    .then(function(response){
      var id = response.data[0].post_id;
      var likes = response.data[0].like_count;
      for(var i = 0; i < $scope.posts.length; i++){
        if($scope.post.post_id === id){
          $scope.post.like_count = likes;
        }
      }
    })
  }





})
