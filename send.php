<?php
if (isset($_POST['mero'])) {$mero = $_POST['mero'];}
if (isset($_POST['secondname'])) {$secondname = $_POST['secondname'];}
if (isset($_POST['firstname'])) {$firstname = $_POST['firstname'];}
if (isset($_POST['otche'])) {$otche = $_POST['otche'];}
if (isset($_POST['telephone'])) {$telephone = $_POST['telephone'];}
if (isset($_POST['pochta'])) {$pochta = $_POST['pochta'];}
if (isset($_POST['vardate'])) {$vardate = $_POST['vardate'];}

$myaddres = "apostolandrey2002@gmail.com";

$mes = "Тема: Заказ мероприятия\nТелефон: $telephone\nИмя: $firstname;

$sub='Заказ';
$email='Заказ мероприятия';
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>Благодарим за заказ. Скоро мы свяжемся с вами!</title>
<meta name="generator">
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
</script> 
</head>
<body>
<h1>Благодарим за заказ. Скоро мы свяжемся с вами!</h1>
</body>
</html>
