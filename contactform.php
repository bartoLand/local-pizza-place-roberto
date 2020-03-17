<?php
if (isset($_POST['submit'])) {
$name = $_POST['name'];
$subject = 'Wiadomość wysłana przez formularz';
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "kontakt@pizzeriaroberto.pl";
$headers = "From: ".$mailFrom;
$txt = "Wiadomość wysłana przez ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend");
}