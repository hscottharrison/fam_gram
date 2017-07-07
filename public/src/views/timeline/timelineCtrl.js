angular.module('famgram').controller('timelineCtrl', function($scope, $state, $stateParams, timelineService){
$scope.posts;
//Immediately grab all posts when page is loaded
timelineService.getPosts()
.then(function(response){
  console.log(response)
  $scope.posts = response;
})

//Immediately grab all comments when page is loaded
timelineService.getComment()
.then(function(response){
  $scope.posts.forEach(c=>c["comments"] = [])

  response.data.forEach(function(cur, ind, arr){
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

      $scope.posts.forEach(c=>c["comments"] = [])
      response.data.forEach(function(cur, ind, arr){
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

$scope.updateLikes = function(like_count, post_id){
  timelineService.updateLikes(like_count, post_id)
  .then(function(response){
    var id = response.data[0].post_id;
    var likes = response.data[0].like_count;
    for(var i = 0; i < $scope.posts.length; i++){
      if($scope.posts[i].post_id === id){
        $scope.posts[i].like_count = likes;
      }
    }
  })
}


})
