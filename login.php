<?php

 $host = "localhost";
 $uname = "admin";
 $passwd = "admin";
 $db = "sms";

 
 $uid = $_GET["uname"];             //"james";
 $upasswd = $_GET["passwd"];	     //"mcgill";

 // TODO: add encryption handling later
 
 
 
/* echo count($_GET) . " ";
 foreach($_GET as $key => $val )
 {
  echo "$key => $val \n";
 }*/

 $conn = new mysqli($host, $uname, $passwd, $db);
 $query_string = "SELECT 1 token FROM user WHERE ";
 $query_string .= "userid = '" . $uid . "' AND passwd = " ."AES_ENCRYPT('" . $upasswd . "', UNHEX(SHA2('" . $upasswd . "', 512)))";
 //echo $query_string;
 if ($result = $conn->query($query_string))
 {
   $row = $result->fetch_array(MYSQLI_ASSOC);
   if ($row && $row["token"] == 1) 
   echo 1;
   else
   echo 0; 
 }
 else
 {
   echo 0;
   //echo $query_string;
 }
?>