
<?php
include('connect.php');



$vitalselected = $_GET['vitalvalue'];//filter_input(INPUT_POST, 'vitalvalue'); 
$arr = array();

if($vitalselected!='bp'){

    $result = mysqli_query($con,"select vs.Name, ve.time, ve.result  from vital_signs vs join VS_Exam ve on vs.VS_ID = ve.VS_ID join Patient_Visit pv on pv.Visit_ID = ve.Visit_ID join patient p on p.patient_ID = pv.patient_ID join person pr on pr.person_ID = p.person_ID where pr.fname = 'Sandra' and vs.Name = '$vitalselected'");
    
    while($row = mysqli_fetch_array($result)) {
        $vitalresult=(int)$row['result'];
        $time=$row['time'];
        array_push($arr, array('vital'=> $vitalresult, 'time' =>$time ));

    }
}

echo json_encode($arr);


