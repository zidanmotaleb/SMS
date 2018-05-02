<?php

$dml_string = "INSERT INTO student(first_name,last_name,";
$dml_string .= "dob, address_1, address_2, city, province, country)";

$first_name = $_POST["firstName"];
$last_name =  $_POST["lastName"];
$dob  =   $_POST["dob"];
$address_1  = $_POST["addr_1"];
$address_2  = $_POST["addr_2"];
$city = $_POST["city"];
$province  = $_POST["province"];
$country =  $_POST["country"];

$dml_string .= ' VALUES("' . $first_name . '",' ;
$dml_string .= '"' . $last_name . '",' ;
$dml_string .= '"' . $dob . '",' ;
$dml_string .= '"' . $address_1 . '",' ;
$dml_string .= '"' . $address_2 . '",' ;
$dml_string .= '"' . $city . '",' ;
$dml_string .= '"' . $province . '",' ;
$dml_string .= '"' . $country . '")' ;

//echo $dml_string;
$conn = new mysqli("localhost", "admin", "admin", "sms");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    
 $result = null;   
 if($result = $conn->query($dml_string))
 {
   echo "Success";
 }
 else
 {
   echo "MySQL failed";
 }
 
$conn->close();
echo "<h1>Record for $first_name $last_name has been successfully created</h1>"; 
?>
