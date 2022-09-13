<?php
    include('config.php');
    $input    = file_get_contents('php://input');
    $data     = json_decode($input,true);
    $message  = array();   
    $Id   = $data['Id']; 
    $Estado   = $data['Estado']; 

    if($Estado == 'No'){
        $sql = "update Productos set Disponible = 'Si' where Id = $Id";
    }else{
        $sql = "update Productos set Disponible = 'No' where Id = $Id";
    }

    $results = $db->query($sql);
    
?>