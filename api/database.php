<?php
// Database credentials
$host = "localhost";
$user = "amal";
$password = "amal";
$database = "pfe";

// Create a new mysqli object
$mysqli = new mysqli($host, $user, $password, $database);

// Check for errors
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
  exit();
}else {
    echo "cnx reussite";
}

// Use the $mysqli object to perform database queries

// Close the database connection
$mysqli->close();

?>