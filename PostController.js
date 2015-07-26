(function() {
  var app = angular.module('ServiceTest');

  var RepoController = function($scope, jsonService, $routeParams) {

    var onRepoComplete = function( data ) {
      $scope.repo = data;
      jsonService.getContributors( $scope.repo )
        .then(onContributors, onError);
    };

    var onContributors = function( data ) {
      $scope.contributors = data;
    };

    var onError = function(reason) {
      $scope.error = 'Could not fetch the data';
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    jsonService.getRepo( $scope.username, $scope.reponame )
      .then( onRepoComplete, onError);

  };

  app.controller('RepoController', ['$scope', 'jsonService', '$routeParams', RepoController]);

}());