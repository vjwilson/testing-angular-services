(function() {
  var app = angular.module('ServiceTest');

  var PostController = function($scope, jsonService, $routeParams) {

    var onPostComplete = function( data ) {
      $scope.post = data;
      jsonService.getCommentsForPost( $scope.postId )
        .then(onComments, onError);
    };

    var onComments = function( data ) {
      $scope.comments = data;
    };

    var onError = function(reason) {
      $scope.error = 'Could not fetch the data';
    };

    $scope.postId = $routeParams.postId;
    jsonService.getOnePost( $scope.postId )
      .then( onPostComplete, onError);

  };

  app.controller('PostController', ['$scope', 'jsonService', '$routeParams', PostController]);

}());
