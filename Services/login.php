<?php
/**
 * Created by PhpStorm.
 * User: Dattebayo
 * Date: 9/7/2017
 * Time: 6:47 AM
 */
require_once 'config.php';


// verifying user from database using PDO
$insertstatement = "SELECT email, password from mytesttable WHERE email='".$_POST['user_email']."' && password='".$_POST['user_password']."'";

$query = $conn->query($insertstatement);
$row = mysqli_num_rows($query);
if ($row > 0){
    echo "correct";
} else{
    echo 'wrong';
}
?>