angular.module('famgram').service('timelineService', function($http){

  this.getPosts = function(){
    return $http.get('/api/posts')
    .then(function(response){
      var timelineArr = response.data;
      return timelineArr.reverse();
    })
  }




})
