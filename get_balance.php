<?php

//$response = "<p>";
 //foreach($_GET as $x => $val)
  //$response .= "key: " . $x . " : value: " . $val . "\n";

 $sid = $_GET["sid"];
// compute the balance for the student:
$bal = 0;

 /////////////////////
 $conn = new mysqli("localhost", "admin", "admin", "sms");

 $qstr = 'SELECT deposit FROM student WHERE id="' . $sid . '"';
 $result = $conn->query($qstr);
 while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
   //echo "result is: " . $bal;
   $bal = $rs["deposit"];
 break;
}
 $conn->close();
 echo $bal; // send only the balance

?>
