var app = angular.module("sms", []);
var cntrl = app.controller("StudentRecCtrl", function($scope, $http) {
  $http.get("./data/students.json").then(function(response) {
    //document.write("res: " + response);
    //document.write("obj: " + response.data.name);
    //document.write("size: " + response.data.length);
    $scope.students = response.data;
  });
});
