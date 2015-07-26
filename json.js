( function() {
  var jsonService = function( $http ) {
    var getUser = function( userId ) {
      console.log('userId: ', userId);
      return $http.get('http://jsonplaceholder.typicode.com/users/' + userId)
        .then( function( response ) {
console.log('response: ', response);
          return response.data;
        });
    };
    
    var getPosts = function( userId ) {
      console.log('userId: ', userId);
      return $http.get( 'http://jsonplaceholder.typicode.com/posts?userId=' + userId )
        .then( function( response ) {
console.log('response: ', response);
          return response.data;
        });
    };
    
    var getRepo = function( username, reponame ) {
      return $http.get('https://api.jsonService.com/repos/' + username + '/' + reponame)
        .then( function( response ) {
          return response.data;
        });
    };
    
    var getContributors = function( repo ) {
      return $http.get( repo.contributors_url )
        .then( function( response ) {
          return response.data;
        });
    };
    
    return {
      getUser: getUser,
      getPosts: getPosts,
      getRepo: getRepo,
      getContributors: getContributors
    };
  };
  
  var module = angular.module( 'ServiceTest' );
  module.factory( 'jsonService', jsonService );
}() );