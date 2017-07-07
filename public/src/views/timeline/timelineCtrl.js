angular.module('famgram').controller('timelineCtrl', function($scope, $state, $stateParams, timelineService){
$scope.posts;
//Immediately grab all posts when page is loaded
timelineService.getPosts()
.then(function(response){
  $scope.posts = response;
})
//Immediately grab all comments when page is loaded
timelineService.getComment()
.then(function(response){
  $scope.posts.forEach(c=>c["comments"] = [])
  var comments = response.data.reverse()
  comments.forEach(function(cur, ind, arr){
    // $scope.posts.find(c=>{
    //   console.log(cur, c);
    // })
    if ($scope.posts.find(c=>c.post_id === cur.post_id)["comments"]){
        $scope.posts.find(c=>c.post_id === cur.post_id)["comments"].push(cur)
    }
    else {
      $scope.posts.find(c=>c.post_id === cur.post_id)["comments"].push(cur)
    }

  })
})
//once comment is added, the get comment function will immediatly be called FROM
//the timelineService so that the new comment will be rendered immediately.
//the get comment function must be called to get the username of the person
//who posted the comment.
$scope.addComment = function(commentText, postId){
  var comment = {
    text: commentText,
    postId: postId,
    userId: $stateParams.id
  }
  timelineService.addComment(comment)
  .then(function(response){
    timelineService.getComment()
    .then(function(response){
      var comments = response.data.reverse()
      $scope.posts.forEach(c=>c["comments"] = [])
      comments.forEach(function(cur, ind, arr){
        // $scope.posts.find(c=>{
        //   console.log(cur, c);
        // })
        if ($scope.posts.find(c=>c.post_id === cur.post_id)["comments"]){
            $scope.posts.find(c=>c.post_id === cur.post_id)["comments"].push(cur)
        }
        else {
          $scope.posts.find(c=>c.post_id === cur.post_id)["comments"].push(cur)
        }

      })
    })

  })
}

$scope.goPost = function(){
  $state.go('post', {id: $stateParams.id})
}



})
