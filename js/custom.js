
//<script type="text/javascript">

function loadStudents(app)
{
app.controller("SCntrl", function ($scope, $http) {
$http.get("students_mysql.php").then(function(response) {
  $scope.students = response.data.records;
  $scope.selected = 0;
  });
$http.get("view_options.json").then(function(response) {
$scope.viewOptions = response.data;
  });

  $scope.test = "This is a sample for listing student/teacher/staff listings; this will be loaded from a tab and the user can navigate from one tab to another ... More details on this later ...";

  $scope.open = function () {
window.alert("Called");
  };

  $scope.getIndex = function() {
    window.alert("School selected index"); //getSelectedIndex()
  };

  $scope.openWindow = function(win, userId) {
  $scope.closeWindow(); // close any window in view:
  if ($scope.selOption == null) {
  window.alert("Please select the window to view first");
   return;
  }
  //window.alert("Selected window: " + $scope.selOption );

  // perform a global matching; replace all matches:
  win = win.replace(/ /g, '_');
 // window.alert("Computed win is: " + win);

  // the coordinate of the current row:
  var rowElem = document.getElementById("r"+userId);
  // window.alert("Row data: " + rowElem.innerHTML);
  // now get its x, y properties:

  var pos = {top: rowElem.offsetTop,
  left: rowElem.offsetLeft + rowElem.clientWidth
  };

 // window.alert("x: " + pos.left + "; y: " + pos.top);

// show the correct view:
  viewOps[win]($http, userId, pos);
  };

  $scope.closeWindow = function() {
  //window.alert("Do you want to dismiss the window?");
  var win = document.getElementById("op-view");
  if (win != null)
  document.body.removeChild(win);
  };
});
}

function loadViewOptions(app)
{
  app.controller("VOptionCntrl", function ($scope, $http) {
  $http.get("view_options.json").then(function(response) {
$scope.viewOptions = response.data;
  }); });
}

function ViewOperations()
  {
  this.http = null;
this.View_Summary = function($http, id, pos) {
window.alert("Calling view summary for student: " + id);
};

this.View_Balance = function($http, id, pos) {
  $http.get("get_balance.php?sid="+id).then(function(response) {
  // var str = "<div class='header'><a id='close' ng-model='close-view' ";
 // str += "href='#'>close X</a></div>";
  var str = "<div><h4>Student " + id + ":</h4><hr/>";
  str += "The current balance is: " + response.data + "</div>";

  var balNode = document.createElement("div");
  balNode.setAttribute("id", "op-view");
  balNode.innerHTML = str;
  balNode.style.top = pos.top + "px";
  balNode.style.left = pos.left +"px";
  document.body.appendChild(balNode);
  });

};

this.Edit_Student_Record = function($http, id, pos) {
window.alert("Edit Student Record for: " + id);
};

  this.Schedule_Courses = function($http, id, pos) {
  // loadCourses;
  $http.get("courses.php").then(function(response) {

  var courses = response.data;
  window.alert("Size of courses: " + courses.length);

  });
window.alert("Schedule Courses for Student: " + id);
};
}

var viewOps = new ViewOperations();
var app = angular.module("schl", []);
loadStudents(app);

//</script>
