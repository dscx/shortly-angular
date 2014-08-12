angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  
  $scope.data = {}; //refactor to use Links?
  $scope.order = 'visits';
  $scope.data.links = Links.links;
});