<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validate input
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
        exit;
    }

    $to = 'webiqra22@gmail.com';
    $subject = 'New Contact Form Submission';

    // Email body with inline CSS
    $body = "
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='UTF-8'>
            <title>$subject</title>
        </head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0;'>
            <div style='width: 100%; padding: 20px; background-color: #f4f4f4;'>
                <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);'>
                    <div style='text-align: center; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 20px;'>
                        <h1 style='margin: 0; font-size: 24px; color: #0073e6;'>New Contact Form Submission</h1>
                    </div>
                    <div style='margin-bottom: 20px;'>
                        <p style='margin: 5px 0;'><strong>Name:</strong> $name</p>
                        <p style='margin: 5px 0;'><strong>Email:</strong> $email</p>
                        <p style='margin: 5px 0;'><strong>Phone:</strong> $phone</p>
                    </div>
                    <div style='background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;'>
                        <p style='margin: 0;'><strong>Message:</strong></p>
                        <p style='margin: 0;'>$message</p>
                    </div>
                    <div style='text-align: center; font-size: 12px; color: #777; border-top: 1px solid #ddd; padding-top: 10px; margin-top: 20px;'>
                        <p>&copy; " . date('Y') . " Motalib & Sons. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </body>
    </html>
    ";

    // Set content type as HTML and proper email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: Motalib & Sons <no-reply@yourdomain.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
