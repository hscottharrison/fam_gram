angular.module('famgram').controller('profCtrl', function($scope, $state, $stateParams, postService, profileService){

  var url;
  document.getElementById('file-input')
  .addEventListener('change', function(e) {
     console.log(e.target.files)
     var file = e.target.files[0]
     postService.getSignedUrl(file)
     .then(function(response) {
        console.log(response)
        url = response.data.url
        return postService.uploadFile(file, response.data.signed_request, response.data.url)
     })
     .then(function(response) {
        console.log(response)
        $scope.imageUrl = url
        $scope.updateProfile = function(){
          var update = {
            url: url,
            id: $stateParams.id
          }
          console.log(update)
          profileService.updateProfile(update)
          .then(function(response){
            alert('Your profile has been updated!')
            $state.go('profile', {id: $stateParams.id})
          })
        }
     })
  })
})
