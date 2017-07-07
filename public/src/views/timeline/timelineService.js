angular.module('famgram').service('timelineService', function($http){

  this.getPosts = function(){
    return $http.get('/api/posts')
    .then(function(response){
      var timelineArr = response.data;
      return timelineArr.reverse();
    })
  }

  this.addComment = function(comment){
    return $http.post('/api/comments', comment)
  }

  this.getComment = function(){
    return $http.get('/api/comments')
  }




})
