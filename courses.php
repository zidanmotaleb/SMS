<?php
$host = "localhost";
$uname = "admin";
$upasswd = "admin"
$db = "sms"

$conn = new MYSQLI($host, $uname, $upasswd, $db);
$query_string = "SELECT code, descr FROM course";
$result = $conn->query($query_string);
if ($result) {
}else{
}
?>