var app = angular.module("app", ['ngAnimate']);

app.controller("InputController", function($scope, $http){
  //Initiasing variables
  $scope.showResult=false;

  $scope.submit = function(){
    $scope.tag = $scope.data.tag;
    $scope.data.tag="";

    //Make the Ajax call to Instagram and get back the results
    $http({
      url: 'https://api.instagram.com/v1/tags/' + $scope.tag + '/media/recent',
      method: 'JSONP',
      params: {
        callback : 'JSON_CALLBACK',
        client_id : '3c1e3c03496f41b49ff28840d7d8e3df'
      }
    })
    .success(function(images){
      console.log(images.data);
      $scope.images = images.data;
      $scope.imageRetrieved = true;
      $scope.submitted=false;
      $scope.showResult=true;
    })
    .error(function(data){
      alert("Connection to server failed. Please search again.");
      $scope.submitted=false;
    });
  }


 
});