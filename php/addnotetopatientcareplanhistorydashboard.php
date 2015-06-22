
<?php
$result = array();
array_push($result, array('name'=> 'Maverick, Sandra'));	
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
echo json_encode($result);

