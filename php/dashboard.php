/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

<?php
$result = array();
array_push($result, array('subject'=> '8/16/15', 'name'=> 'Dr. Charlie Taylor', 'category'=> 'MAR', 'tags'=> 'Lasy, refill'));	
array_push($result, array('subject'=> '8/16/16', 'name'=> 'Dr. Charlie Taylor', 'category'=> 'MAR', 'tags'=> 'Lasy, refill'));	
array_push($result, array('subject'=> '8/16/17', 'name'=> 'Dr. Charlie Taylor', 'category'=> 'MAR', 'tags'=> 'Lasy, refill'));	
array_push($result, array('subject'=> '8/16/16', 'name'=> 'Dr. Charlie Taylor', 'category'=> 'MAR', 'tags'=> 'Lasy, refill'));	
array_push($result, array('subject'=> '8/16/16', 'name'=> 'Dr. Charlie Taylor', 'category'=> 'MAR', 'tags'=> 'Lasy, refill'));	
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
echo json_encode($result);

