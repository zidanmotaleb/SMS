  function loadContents()
  {
  // load the student tab(tab-1);
  var tp1 = document.getElementById("tab-1");
  //window.alert("Loading tab1's content: " + tp1.innerHTML);
  // make the content:
  var tc = "<div ng-init='selOption=\"View Balance\"'>";
tc += " <select ng-model='selOption' required><option ng-repeat='op in viewOptions'>{{op.desc}}</option></select>";
tc += "<table ng-mouseout='closeWindow()'>";
tc += "<tr><th>#</th><th>ID</th><th>Name</th><th>City</th><th>Country</th></tr>";
tc  += "<tr id='r{{row.ID}}' class='t{{$index % 2}}' ng-repeat='row in students | filter:$SCntrl.query' ";
tc  += "ng-dblclick='openWindow(selOption, row.ID)'>";
tc += "<td ng-disabled='td'>{{$index + 1}}</td>";
tc += "<td ng-disabled>{{row.ID}}</td>";
tc += "<td>{{row.FirstName + ' ' + row.LastName | uppercase}}</td>";
tc += "<td>{{row.City}}</td><td>{{row.Country}}</td></tr></table>";
//window.alert(tc);
tp1.innerHTML = tc;

// load the teachers:
var tp2 = document.getElementById("tab-2");
  var t2_tc = "<div ng-init='t2_selOption=\"View Balance\"'>";
t2_tc += " <select ng-model='t2_selOption' required><option ng-repeat='t2_op in t2_viewOptions'>{{t2_op.desc}}</option></select>";
t2_tc += "<table ng-mouseout='closeWindow()'>";
t2_tc += "<tr><th>#</th><th>ID</th><th>Name</th><th>City</th><th>Country</th></tr>";
t2_tc  += "<tr id='r{{t2_row.ID}}' class='t{{$index % 2}}' ng-repeat='t2_row in t2_students' ";
t2_tc  += "ng-dblclick='openWindow(t2_selOption, t2_row.ID)'>";
t2_tc += "<td ng-disabled='td'>{{$index + 1}}</td>";
t2_tc += "<td ng-disabled>{{t2_row.ID}}</td>";
t2_tc += "<td>{{t2_row.FirstName + ' ' + t2_row.LastName | uppercase}}</td>";
t2_tc += "<td>{{t2_row.City}}</td><td>{{t2_row.Country}}</td></tr></table>";
//window.alert(tc);
tp2.innerHTML = t2_tc;
}

$(function() {

  $("#contents" ).tabs({
  create: function( event, ui ) {
  loadContents();}
  });

  $("#contents").tabs();
  // highlight theme:
  $( "#contents" ).tabs({
  classes: {
  "ui-tabs": "highlight"
  }
  });

  // when a tab is activated; use create event for ...
  $( "#contents" ).tabs({
  activate: function( event, ui ) {
  // window.alert("ACTIVATE: tab has been activated");
  }
  });

  // bind an event listener to tab activation ...
  $("#contents" ).on( "tabsactivate", function( event, ui ) {
  } );


  // we can do a set up here for each tab content:
  $("#contents").tabs({
  beforeActivate: function( event, ui ) {
  }
  });

  });
