angular.module('famgram').controller('timelineCtrl', function($scope, timelineService){

  $scope.test = timelineService.test

  $scope.upload(file){
    timelineService.upload(file)
    .then(function(response){
      console.log(response)
    })
  }



})
