
<?php
include('connect.php');



$vitalselected = $_GET['vitalvalue'];//filter_input(INPUT_POST, 'vitalvalue'); 

$arr = array();
$result = mysqli_query($con,"select SUBSTR(X.result, 1, LOCATE('/', X.result)-1)as vital , SUBSTR(X.result, LOCATE('/', X.result)+1, char_length(X.result)- LOCATE('/', X.result)) as deno ,  X.time from (select pr.fname, pr.lname, vs.Name, ve.date, ve.time, ve.result from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID) X where X.fname = 'Sandra' and X.name = 'BP'");
        
    while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['vital'];
        $time=$row['time'];
        $deno=(int)$row['deno'];
        array_push($arr, array('vitalnum'=> $vitalresult, 'vitaldeno'=> $deno,'time' =>$time ));

    }

echo json_encode($arr);


if($vitalselected=='bp'){
        
    
}