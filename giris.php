<?php
// Kullanıcı adı ve şifreyi burada tanımlayın
$allowed_email = "b231210033@sakarya.edu.tr";
$allowed_password = "b231210033";

// Post edilen verileri alın
$email = $_POST['email'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre kontrolü
if ($email == $allowed_email && $password == $allowed_password) {
    echo "Giriş başarılı!";
} else {
    echo "Eposta veya şifre yanlış. Lütfen tekrar deneyin.";
}
?>
