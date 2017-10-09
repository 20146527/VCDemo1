<?php
/**
 * Created by PhpStorm.
 * User: Dattebayo
 * Date: 9/28/2017
 * Time: 8:16 AM
 */
require_once 'config.php';


$insertstatement = 'UPDATE `editpage` 
SET `title` = "'.$_POST['title'].'", `checkbox` = "'.$_POST['checkbox'].'", `select` =  "'.$_POST['select'].'"
WHERE widgetid LIKE "'.$_POST['widgetid'].'" AND areaid LIKE "'.$_POST['areaid'].'"';

$query = $conn->query($insertstatement);

if ($query == true){
    echo "correct";
} else{
    echo 'wrong';
}
?>




