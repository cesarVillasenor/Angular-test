var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {
//    fetch("https://jsonplaceholder.typicode.com/posts")
//        .then(response => response.json())
//            .then(json => $scope.names==json)

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(function(myJson) {
    $scope.names=myJson;
  });

});
