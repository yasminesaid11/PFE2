<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Access-Control-Allow-Headers:Content-Type,Authorization,X-Requested-With');
header('Content-Type:application/json;charset=UTF-8');

$file = $_FILES['file']['tmp_name'];


$kml = file_get_contents($file);
$xml = simplexml_load_string($kml);
// Initialize an empty string to hold the coordinate data
$coordinates = '';
$txt_contents='(Latitude,Longtitude)';
// Loop through all Placemark elements in the KML file
foreach ($xml->Document->Placemark as $placemark) {
    // Get the coordinate data as a string and split it into an array
    $coord_string = (string) $placemark->LineString->coordinates;
    $coord_array = explode(',0', $coord_string);
   for ($i=0;$i<count($coord_array);$i++)
   {  
    $coordinates .= $coord_array[$i] . "\n";
   }
}

// Send the coordinate data as plain text
header('Content-Type: text/plain');
echo $coordinates;


$txt_contents .= "$coordinates \n";

$txt_file = "resultat.txt";
file_put_contents($txt_file, $txt_contents);
 


?>