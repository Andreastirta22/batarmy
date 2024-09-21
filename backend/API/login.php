<?php
header("Content-Type: application/json");
include 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;

// Hash password jika perlu
$stmt = $conn->prepare("SELECT id, role FROM users WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    echo json_encode($user);
} else {
    echo json_encode(["error" => "Invalid email or password"]);
}

$stmt->close();
$conn->close();
?>
