<?php
$host = "localhost";
$uname = "admin";
$upasswd = "admin";
$db = "sms";

$conn = new MYSQLI($host, $uname, $upasswd, $db);
$query_string = "SELECT * FROM course";
$result = $conn->query($query_string);
$result_str = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {

if ($result_str != "")
{
  $result_str .= ",";
}

$result_str .= '{"ID":"'  . $rs["id"] . '",';
$result_str .= '"Name":"'  . $rs["name"] . '",';
$result_str .= '"Credit":"'  . $rs["credit"] . '",';
$result_str .= '"Status":"'. $rs["status"]     . '"}';
}

$result_str ='{"courses":['.$result_str.']}';
$conn->close();

echo($result_str);
?>
