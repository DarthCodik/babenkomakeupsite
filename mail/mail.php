<?php 

// babenko_make_up_studio@mail.ru

$to = "mrS1lv3s7r@yandex.ru"; // емайл получателя данных из формы


$firstName = $_POST['firstName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$option = $_POST['select'];

$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
  $headers .= 'From: Babenko Make-Up Studio <mrS1lv3s7r@yandex.ru>';

$tema = "Новая запись на занятие"; // тема полученного емайла 

$message = "<div><p> Имя: ".$firstName." </p><p> E-mail: ".$email." </p><p> Номер телефона: ".$phone." </p><p> Комментарии: ".$message." </p><p> Выбранный курс: ".$option." </p></div>";


$mail1 = mail($to, $tema, $message, $headers);


$userMail = $_POST['email'];

$title = "Ваша запись на занятие";

$user_message = "<div><p> Поздравляем! Вы успешно подали заявку на занятие! </p><p> С вами свяжутся в ближайшее время. </p><p> Выбранный курс: ".$option." </p><p> Ваше имя: ".$firstName." </p><p> Ваш e-mail: ".$email." </p><p> Ваш номер телефона: ".$phone." </p><p> Комментарии: ".$message." </p></div>";

$mail2 = mail($userMail, $title, $user_message, $headers);


	
?>