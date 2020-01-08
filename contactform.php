<?php

if (isset($_POST['submit'])) {
$name = $_POST['name'];
// $subject = $_POST['subject'];
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "kontakt@pizzeriaroberto.pl";
$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $txt, $headers);
header("Location: index.html?mailsend");
}

// mail($mailTo, $subject, $txt, $headers);
// header("Location: index.html?mailsend");
// }