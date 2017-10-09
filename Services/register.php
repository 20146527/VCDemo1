<?php
/**
 * Created by PhpStorm.
 * User: Dattebayo
 * Date: 9/7/2017
 * Time: 6:47 AM
 */
require_once 'config.php';


$insertstatement = 'INSERT INTO `mytesttable`(`id`,`username`,`email`,`password`) VAlUES (NULL,"'.$_POST['username'].'","'.$_POST['user_email'].'","'.$_POST['user_password'].'")';

$query = $conn->query($insertstatement);

if ($query == true){
    echo "correct";
} else{
    echo 'wrong';
}
?>