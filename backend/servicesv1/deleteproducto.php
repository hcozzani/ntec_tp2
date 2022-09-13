<?php
    include('config.php');
    $input    = file_get_contents('php://input');
    $data     = json_decode($input,true);
    $message  = array();   
    $Id   = $data['Id']; 


    $sql = "delete from Productos where Id = $Id";

    $db->query($sql);

    $arr_datos = array(['message'=> 'ok']);

    $json_string = json_encode($arr_datos,JSON_PRETTY_PRINT);

    echo $json_string;

    exit;

?>
