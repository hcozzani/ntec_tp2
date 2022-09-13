<?php
    include('config.php');
    $input    = file_get_contents('php://input');
    $data     = json_decode($input,true);
    $message  = array();   
    $nombre   = $data['nombre']; 
    $direccion  = $data['direccion']; 
    $pedido  = $data['pedido'];
    $telefono  = $data['telefono'];  

    if($nombre != "" || $direccion != "" || $pedido!="" || $telefono!=""){
        $sql = "insert into Pedidos values (null,'$nombre','$direccion','$pedido','$telefono')";
        $results = $db->query($sql);
    }


?>