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



// Use the $mysqli object to perform database queries


// Get user input from request body
$user = json_decode(file_get_contents('php://input'));

// Validate user input
if (!empty($user->userName) && !empty($user->email) && !empty($user->adresse) && !empty($user->phone) && !empty($user->password)) {
  // Check if email address already exists in database
  $stmt = mysqli_prepare($mycnx, "SELECT COUNT(*) FROM compte WHERE email = ?");
  mysqli_stmt_bind_param($stmt, "s", $user->email);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_bind_result($stmt, $count);
  mysqli_stmt_fetch($stmt);
  mysqli_stmt_close($stmt);
  
  if ($count > 0) {
    // Email address already exists, return error response
   echo json_encode(array(
      'success' => false,
      'message' => 'Email existe déja.',
    ));

    }   else if (!filter_var($user->email, FILTER_VALIDATE_EMAIL)) {

        echo json_encode(array("success" => false, "message" => "Email invalid !"));

    } else if (!is_numeric($user->phone)) {

        echo json_encode(array("success" => false, "message" => "Phone invalide ."));
    }
    else if  (strlen($user->phone) != 8) {

        echo json_encode(array("success" => false, "message" => "Longeur Phone invalide ."));
    }
  
  else {
    // Email address does not exist, create user account
    $stmt = mysqli_prepare($mycnx, "INSERT INTO compte (username, email, adresse, phone, password) VALUES (?, ?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "sssss", $user->userName, $user->email, $user->adresse, $user->phone, $user->password);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
  
    // Return success response

    echo json_encode(array(
      'success' => true,
      'message' => 'User account created.',
    ));

  }
} else {

  // Required form field is missing or empty
 echo json_encode(array(
    'success' => false,
    'message' => 'Les champs sont obligatoires !',
  ));

}

// Close database connection
mysqli_close($mycnx);

 

?>