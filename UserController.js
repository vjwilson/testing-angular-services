(function() {
  var app = angular.module('ServiceTest');

  var UserController = function($scope, jsonService, $routeParams) {

    var onUserComplete = function( data ) {
      $scope.user = data;
      jsonService.getPosts( $scope.user.id )
        .then(onPosts, onError);
    };

    var onPosts = function( data ) {
      $scope.posts = data;
    };

    var onError = function(reason) {
      $scope.error = 'Could not fetch the data';
    };

    $scope.userId = $routeParams.userId;
    jsonService.getUser( $scope.userId )
      .then( onUserComplete, onError);

  };

  app.controller('UserController', ['$scope', 'jsonService', '$routeParams', UserController]);

}());