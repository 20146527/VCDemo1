<?php
/**
 * Created by PhpStorm.
 * User: Dattebayo
 * Date: 9/21/2017
 * Time: 8:30 AM
 */
require_once 'config.php';
$insertstatement = "SELECT * FROM testdashboard WHERE widgetid LIKE '".$_POST["widgetid"]."'";

$result = $conn->query($insertstatement);
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
header('Content-Type: application/json');
echo json_encode($outp);


//'".$_POST["widgetid"]."'
?>


