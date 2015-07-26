(function() {
  var app = angular.module('ServiceTest');

  var MainController = function($scope, $location) {

    $scope.username = 1;

    $scope.search = function(username) {
      $location.path( '/user/' + username );
    };
  };

  app.controller('MainController', ['$scope', '$location', MainController]);

}());