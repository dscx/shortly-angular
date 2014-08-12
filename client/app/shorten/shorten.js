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
        // console.log(data);
        $scope.shortLink = data; //new url 
      });
    }

  };

});

// app.js
  // // create angular app
  // var validationApp = angular.module('validationApp', []);

  // // create angular controller
  // validationApp.controller('mainController', function($scope) {

  //   // function to submit the form after all validation has occurred      
  //   $scope.submitForm = function(isValid) {

  //     // check to make sure the form is completely valid
  //     if (isValid) {
  //       alert('our form is amazing');
  //     }

  //   };

  // });
