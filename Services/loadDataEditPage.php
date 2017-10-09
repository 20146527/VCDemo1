<?php
/**
 * Created by PhpStorm.
 * User: Dattebayo
 * Date: 9/27/2017
 * Time: 11:40 PM
 */
require_once 'config.php';
$insertstatement = "SELECT * FROM editpage WHERE widgetid LIKE '".$_POST["widgetid"]."' AND areaid LIKE '".$_POST["areaid"]."'";

$result = $conn->query($insertstatement);
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
header('Content-Type: application/json');
echo json_encode($outp);


//'".$_POST["widgetid"]."'
?>


