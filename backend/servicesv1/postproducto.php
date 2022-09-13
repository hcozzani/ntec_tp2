<?php
    include('config.php');
    $input    = file_get_contents('php://input');
    $data     = json_decode($input,true);
    $message  = array();   
    $Producto   = $data['Producto']; 
    $Precio  = $data['Precio']; 

    if($Producto != "" || $Producto != ""){
        $sql = "insert into Productos values (null,'$Producto','$Precio','Si')";
        $results = $db->query($sql);
    }


?>