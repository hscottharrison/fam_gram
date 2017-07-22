angular.module('famgram').controller('viewprofCtrl', function($scope, $stateParams, timelineService){

  timelineService.getUsers()
  .then(function(response){
    var users = response.data;
    $scope.users=response.data;
    console.log($scope.users)
    var user = []
    for(var i = 0; i < users.length; i++){
      // if(!users[i].profile_pic){
      //   users[i].profile_pic = 'https://www.talent2celeb.com/images/proifle_pic.png'
      // }
      if(users[i].username == $stateParams.username){
        user.push(users[i])
      }
    }
    $scope.viewuser = user
    console.log($scope.user)
  })

  timelineService.getPosts()
  .then(function(response){
    var userPosts = []
    for(var i = 0; i < response.length; i++){
      if(response[i].username == $stateParams.username){
        userPosts.push(response[i]);
      }
    }
    $scope.viewuserPosts = userPosts;
  })

})
