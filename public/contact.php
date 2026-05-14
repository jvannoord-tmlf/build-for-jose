<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get the input
$data = json_decode(file_get_contents('php://input'), true);

// Sanitize inputs
$name    = str_replace(["\r", "\n"], '', trim($data['name'] ?? '')); // Strip newlines
$phone   = trim($data['phone'] ?? '');
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars(trim($data['message'] ?? '')); // Basic XSS prevention

// Validation
if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, valid email, and message are required.']);
    exit;
}

// Configuration
$to      = 'josefall1020@live.com';
$from    = 'scott@mcmillanlaw.us';
$subject = "New Contact Form Submission from $name";

$body  = "Name: $name\n";
$body .= "Phone: $phone\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";


$from = 'scott@mcmillanlaw.us';
$headers = [
    'From' => $from,
    'Reply-To' => $email, // The user's email so you can reply to them
    'X-Mailer' => 'PHP/' . phpversion()
];


// Send
if (mail($to, $subject, $body, $headers, "-f $from")) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Internal server error. Mail failed to send.']);
}
