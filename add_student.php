<?php

$dml_string = "INSERT INTO student(id, first_name, last_name,";
$dml_string .= "dob, sin, gender, address_1, address_2, postal_code, city, state, country, phone_no, email, status, deposit)";

$id = $_POST["id"];
$sin = $_POST["sin"];
$first_name = $_POST["firstName"];
$last_name =  $_POST["lastName"];
$dob  =   $_POST["dob"];
$gender = $_POST["gender"];
$address_1  = $_POST["addr_1"];
$address_2  = $_POST["addr_2"];
$city = $_POST["city"];
$pcode = $_POST["pcode"];
$province  = $_POST["province"];
$country =  $_POST["country"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$deposit = $_POST["deposit"];
$tmp = $_POST["status"];
if ($tmp == "on")
  $status = 1;
else
  $status = 0;


$dml_string .= ' VALUES("' . $id . '",' ;
$dml_string .= '"' . $first_name . '",' ;
$dml_string .= '"' . $last_name . '",' ;
$dml_string .= '"' . $dob . '",' ;
$dml_string .= '"' . $sin . '",' ;
$dml_string .= '"' . $gender . '",' ;
$dml_string .= '"' . $address_1 . '",' ;
$dml_string .= '"' . $address_2 . '",' ;
$dml_string .= '"' . $postal_code . '",' ;
$dml_string .= '"' . $city . '",' ;
$dml_string .= '"' . $province . '",' ;
$dml_string .= '"' . $country . '",' ;
$dml_string .= '"' . $phone . '",' ;
$dml_string .= '"' . $email . '",' ;
$dml_string .= '"' . $status . '",' ;
$dml_string .= $deposit . ');' ;


//echo $dml_string;
$conn = new mysqli("localhost", "admin", "admin", "sms");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

 $result = null;
 if($result = $conn->query($dml_string))
 {
   echo "<h2 style='color:green'>Record for $first_name $last_name has been successfully created</h2>";
 }
 else
 {
   echo "<h2 style='color:red'>Error creating record for $first_name  $last_name</h2>";
 }

//echo $dml_string;
$conn->close();

?>
