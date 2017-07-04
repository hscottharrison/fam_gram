angular.module('famgram').service('timelineService', function($http){

  this.test = 'Does this work? yes!'

  this.upload = function(file){
    return $http.post('/api/create_post', file)
  }


})
