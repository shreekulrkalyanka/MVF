/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<?php
$result = array();
array_push($result, array('name'=> 'Maverick, Sandra', 'category'=> 'Patient',  'mrn'=> '0011200','details'=>'Keeper of information, health promotion'));	
array_push($result, array('name'=> 'Maverick, Hunter', 'category'=> 'Patient',  'mrn'=> '0011200','details'=>'C risis, Uncertainty, Waiting, Protection, Anxiety,
Stress, Communication'));	
array_push($result, array('name'=> 'Maverick, Sandra', 'category'=> 'Patient',  'mrn'=> '0011200','details'=>'Keeper of information, health promotion'));	
array_push($result, array('name'=> 'Maverick, Hunter', 'category'=> 'Patient',  'mrn'=> '0011200','details'=>'C risis, Uncertainty, Waiting, Protection, Anxiety,
Stress, Communication'));
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
echo json_encode($result);

