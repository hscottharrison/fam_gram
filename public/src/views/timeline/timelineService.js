angular.module('famgram').service('timelineService', function($http){

  this.getPosts = function(){
    return $http.get('/api/posts')
    .then(function(response){
      var timelineArr = response.data;
      for(var i = 0; i < timelineArr.length; i++){
        if(!timelineArr[i].like_count){
          timelineArr[i].like_count = 0
        }
      }
      return timelineArr.reverse();
    })
  }

  this.addComment = function(comment){
    return $http.post('/api/comments', comment)
  }

  this.getComment = function(){
    return $http.get('/api/comments')
  }

  this.updateLikes = function(like_count, post_id){
    like_count++
    var likes = {
      like_count: like_count,
      post_id: post_id,
    }
    return $http.post('/api/likes', likes)

  }




})
