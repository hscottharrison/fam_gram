angular.module('famgram').controller('postCtrl', function($scope, $stateParams, $state, postService){
  $scope.paramsId = $stateParams.id;
  var url;
  document.getElementById('file-input')
  .addEventListener('change', function(e){
    // console.log(e.target.files)
    var file = e.target.files[0]
    postService.getSignedUrl(file)
    .then(function(response){
      // console.log(response)
      url = response.data.url
      return postService.uploadFile(file, response.data.signed_request, response.data.url)
    })
    .then(function(response){
      // console.log(response)
      $scope.imageUrl = url

      $scope.createPost = function(caption){
        var post = {
            url: url,
            caption: caption,
            id: $stateParams.id
          }
        postService.createPost(post)
        .then(function(response){
          alert('Your post has been created!')
          $state.go('timeline', {id: $stateParams.id})
        })
      }
    })
  })

})
