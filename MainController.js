(function() {
  var app = angular.module('ServiceTest');

  var MainController = function($scope, $location, jsonService) {
    var users = [];
    var userId = 1;

    var onUsersComplete = function( data ) {
      $scope.users = data;
    };

    var onError = function(reason) {
      $scope.error = 'Could not fetch the data';
    };

    $scope.username = 1;

    jsonService.getUsers()
      .then( onUsersComplete, onError);

    $scope.search = function(userId) {
      $location.path( '/user/' + userId );
    };
  };

  app.controller('MainController', ['$scope', '$location', 'jsonService', MainController]);

}());
