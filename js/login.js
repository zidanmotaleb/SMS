  var app = angular.module("login", []);
  app.controller("LoginCntrl", function($scope, $http) {
  var dUsr = {uname: "admin", passwd: "Zidan"};
  $scope.usr = dUsr;
  $scope.usr.errcode = 0;


  $scope.login = function() {
  $scope.validate();
  var str = "login.php?"+"uname="+$scope.usr.uname+"&passwd="+$scope.usr.passwd;

  $http.get(str).then(function(response) {
  $scope.content = response.data;
  if ($scope.content == 0)
  {
  $scope.usr.errcode = 1;

  }
  else
  {
  // load a new page:
  $scope.usr.errcode = 0;
  window.open("sms.html", "_self");
  }

 // window.alert("$"+$scope.content+"$");
  //$scope.statuscode = response.status;
  //$scope.statustext = response.statusText;
   });

  };
  $scope.validate = function() {
     //window.alert("User is: " + $scope.usr.uname + " Submit button clicked");
  };
  });
