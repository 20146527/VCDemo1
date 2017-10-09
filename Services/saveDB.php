<?php
/**
 * Created by PhpStorm.
 * User: Dattebayo
 * Date: 9/18/2017
 * Time: 2:39 PM
 */
require_once 'config.php';


$insertstatement = 'UPDATE `testdashboard` 
SET `title` = "'.$_POST['title'].'", `checkbox` = "'.$_POST['checkbox'].'", `select` =  "'.$_POST['select'].'"
WHERE `testdashboard`.`widgetid` = "'.$_POST['widgetid'].'"';

$query = $conn->query($insertstatement);

if ($query == true){
    echo "correct";
} else{
    echo 'wrong';
}
?>




