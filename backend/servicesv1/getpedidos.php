<?php

	header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include('config.php');

    $consulta = 'select * from Pedidos';
	
    $results = $db->query($consulta);

    $cols = $results->numColumns();

    while ($row = $results->fetchArray(SQLITE3_ASSOC))
    {
        $jsonArray[] = $row;
    }

    if (empty($jsonArray))
	{
        $response = "[]";
	}else{
        $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
    }

    print $response;

?>