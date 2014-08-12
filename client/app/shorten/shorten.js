angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;
  

  $scope.addLink = function (){
    $scope.loading = true;
    $http.post('/api/links', $scope.link).success(function(data){
      $scope.link.url = '';
      $scope.loading = false;
      $scope.shortLink(data); //new url 
    });

  };

  $scope.shortLink = function(data){
    return data.url + "/api/links/" + data.code;
  }
});
