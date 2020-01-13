<?php
//  iconv_set_encoding("internal_encoding", "UTF-8");

if (isset($_POST['submit'])) {
$name = $_POST['name'];
$subject = 'Wiadomość wysłana przez formularz';
$mailFrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "kontakt@pizzeriaroberto.pl";
$headers = "From: ".$mailFrom;
$txt = "Wiadomość wysłana przez ".$name.".\n\n".$message;

// mail($mailTo, $txt, $headers);
// header("Location: index.html?mailsend");
// }

// mail(utf8_decode($mailTo), utf8_decode($subject), utf8_decode($txt), utf8_decode($headers));
// header("Location: index.html?mailsend");
// }


mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend");
}