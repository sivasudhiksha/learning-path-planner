<?php
$conn = mysqli_connect("localhost", "root", "", "learning_path_planner", 3307);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
