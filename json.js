( function() {
  var jsonService = function( $http ) {
    
    var getUsers = function() {
      return $http.get( 'http://jsonplaceholder.typicode.com/users' )
        .then( function( response ) {
          return response.data;
        });
    };

    var getOneUser = function( userId ) {
      return $http.get('http://jsonplaceholder.typicode.com/users/' + userId)
        .then( function( response ) {
          return response.data;
        });
    };
    
    var getPosts = function( userId ) {
      return $http.get( 'http://jsonplaceholder.typicode.com/posts?userId=' + userId )
        .then( function( response ) {
          return response.data;
        });
    };
    
    var getOnePost = function( postId ) {
      return $http.get('http://jsonplaceholder.typicode.com/posts/' + postId )
        .then( function( response ) {
          return response.data;
        });
    };
    
    var getCommentsForPost = function( postId ) {
      return $http.get( 'http://jsonplaceholder.typicode.com/comments?postId=' + postId )
        .then( function( response ) {
          return response.data;
        });
    };
    
    return {
      getUsers: getUsers,
      getOneUser: getOneUser,
      getPosts: getPosts,
      getOnePost: getOnePost,
      getCommentsForPost: getCommentsForPost
    };
  };

  var module = angular.module( 'ServiceTest' );
  module.factory( 'jsonService', jsonService );
}() );
