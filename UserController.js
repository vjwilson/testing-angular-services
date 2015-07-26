(function() {
  var app = angular.module('ServiceTest');

  var UserController = function($scope, $location, $routeParams, jsonService) {

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

    $scope.view = function( postId ) {
      $location.path( '/post/' + postId );
    };

    $scope.userId = $routeParams.userId;
    jsonService.getOneUser( $scope.userId )
      .then( onUserComplete, onError);

  };

  app.controller('UserController', ['$scope', '$location', '$routeParams', 'jsonService', UserController]);

}());
