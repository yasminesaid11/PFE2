<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// Database credentials
$host = "localhost";
$user = "amal";
$password = "amal";
$database = "pfe";

// Create a new mysqli object
$mycnx = mysqli_connect($host, $user, $password, $database);


// Get the POST data
$user = json_decode(file_get_contents('php://input'));

// Extract the username or email and password from the POST data
$email = $user->email;
$password = $user->password;

// Connect to the database

// Prepare the query
$stmt = mysqli_prepare($mycnx, "SELECT * FROM compte WHERE  email = ? AND password = ?");

// Bind the parameters
mysqli_stmt_bind_param($stmt, 'ss', $email, $password);

// Execute the query
mysqli_stmt_execute($stmt);

// Get the results
$result = mysqli_stmt_get_result($stmt);
if (!empty($user->email) && !empty($user->password)){
// Check if a user with the given email or username and password exists
if ($row = mysqli_fetch_assoc($result)) {
  
  // User found, return success response
  echo json_encode(array("success" => true, "message" => "User signed in successfully."));

} else {
  // User not found, return 
  echo json_encode(array("success" => false, "message" => "ce compte n'existe pas."));
}
} else { 

echo json_encode(array("success" => false, "message" => "les champs obligatoires."));
}

// Close the database connection
mysqli_close($mycnx);
?>
