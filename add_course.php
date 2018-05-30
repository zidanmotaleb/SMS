<?php

$dml_string = "INSERT INTO course(id, name, credit, status)";

$id = $_POST["id"];
$name = $_POST["name"];
$credit = $_POST["credit"];
$tmp = $_POST["status"];
if ($tmp == "on")
  $status = 1;
else
  $status = 0;

$dml_string .= ' VALUES("' . $id . '",' ;
$dml_string .= '"' . $name . '",' ;
$dml_string .= '"' . $credit . '",' ;
$dml_string .= $status . ');' ;


//echo $dml_string;
$conn = new mysqli("localhost", "admin", "admin", "sms");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 $result = null;
 if($result = $conn->query($dml_string))
 {
   echo "<h2 style='color:green'>Record for $name has been successfully created</h2>";
 }
 else
 {
   echo "<h2 style='color:red'>Error creating record for $name</h2>";
 }

//echo $dml_string;
$conn->close();

?>
