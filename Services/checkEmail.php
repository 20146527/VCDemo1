<?php
/**
 * Created by PhpStorm.
 * User: Dattebayo
 * Date: 9/14/2017
 * Time: 11:57 AM
 */
require_once 'config.php';


// verifying user from database using PDO
$insertstatement = "SELECT email from mytesttable WHERE email='".$_POST['user_email']."' ";

$query = $conn->query($insertstatement);
$row = mysqli_num_rows($query);
if ($row > 0){
    echo "correct";
} else{
    echo 'wrong';
}
?>