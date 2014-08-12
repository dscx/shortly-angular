angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  
  $scope.data = {links: []}; //refactor to use Links?

  $scope.getLinks = function(){
    $http.get("/api/links").success(function(data){
      $scope.data.links = data;
    });
  };

  $scope.getLinks();
});


  // $http.get('/someUrl').success(successCallback);