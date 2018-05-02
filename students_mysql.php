<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "admin", "admin", "sms");

$result = $conn->query("SELECT * FROM student");

$result_str = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {

if ($result_str != "")
{
  $result_str .= ",";
}

$result_str .= '{"ID":'  . $rs["id"] . ',';
$result_str .= '"FirstName":"'  . $rs["first_name"] . '",';
$result_str .= '"LastName":"'  . $rs["last_name"] . '",';
$result_str .= '"DateOfBirth":"'  . $rs["dob"] . '",';
$result_str .= '"City":"'   . $rs["city"]        . '",';
$result_str .= '"Country":"'. $rs["country"]     . '"}';
}

$result_str ='{"records":['.$result_str.']}';
$conn->close();

echo($result_str);
?>
