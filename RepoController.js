(function() {
  var app = angular.module('githubViewer');

  var RepoController = function($scope, github, $routeParams) {

    var onRepoComplete = function( data ) {
      $scope.repo = data;
      github.getContributors( $scope.repo )
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
    github.getRepo( $scope.username, $scope.reponame )
      .then( onRepoComplete, onError);

  };

  app.controller('RepoController', ['$scope', 'github', '$routeParams', RepoController]);

}());