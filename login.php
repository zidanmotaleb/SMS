<?php

 $host = "localhost";
 $uname = "admin";
 $passwd = "admin";
 $db = "sms";

 
 $uid = $_POST["uname"];             //"james";
 $upasswd = $_POST["passwd"];	     //"mcgill";

 // TODO: add encryption handling later
 
 
 /*
 echo count($_POST) . " ";
 foreach($_POST as $key => $val )
 {
  echo "$key => $val \n";
 }*/

 $conn = new mysqli($host, $uname, $passwd, $db);
 $query_string = "SELECT 1 token FROM user WHERE ";
 $query_string .= "userid = '" . $uid . "' AND passwd = '" . $upasswd . "'";
 //echo $query_string;
 if ($result = $conn->query($query_string))
 {
   $row = $result->fetch_array(MYSQLI_ASSOC);
   if ($row && $row["token"] == 1) 
   echo "<p>" . $uid . " Successfully logged in!</p>";
   else
   echo "<p>" . $uid . " Invalid username/password</p>";
 }
 else
 {
   echo "Access denied: unknown user: $uid\n";
 }
?>