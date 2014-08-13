angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;
  

  $scope.addLink = function (isValid){
    if(isValid){
      $scope.loading = true;
      $http.post('/api/links', $scope.link).success(function(data){
        $scope.link.url = null;
        $scope.loading = false;
        $scope.shortLink = data; //new url 
        $location.path("/");
      });
    }

  };

});
