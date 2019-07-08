<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

class Mailer
{
    public static function mail($to, $from, $subject, $message, $attachments = array())
    {

        $mail = new PHPMailer(true);

        try {
            //$mail->SMTPDebug = 2;
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host       = 'smtp.yandex.ru';                 // Specify main and backup SMTP servers
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = 'noreply@tr2b.ru';                // SMTP username
            $mail->Password   = 'ZGdd49JXouIjE1Rr';               // SMTP password
            $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port       = 465;                              // TCP port to connect to

            $mail->CharSet    = 'UTF-8';
            $mail->Encoding   = 'base64';

            //Recipients
            $mail->setFrom('noreply@tr2b.ru');
            $mail->addAddress($to);
            $mail->addReplyTo($from);

            //Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body    = $message;

            $mail->send();

            echo json_encode((object)[
                'status' => 'OK'
            ]);

        } catch (Exception $e) {

            echo json_encode((object)[
                'status' => 'Error',
                'message' => 'Message could not be sent. Error: ' . $mail->ErrorInfo
            ]);
        }

        exit;
    }
}

class Former
{
    public static function write($formUrl, $data)
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $formUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        $output = curl_exec($ch);

        curl_close($ch);
    }
}

$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);

$subject = $subject ?: 'Запрос на консультацию';

$message = <<<MESSAGE
<table>
    <tr>
        <th>Телефон</th>
        <td>{$phone}</td>
        <th>E-mail</th>
        <td>{$email}</td>
    </tr>
</table>
MESSAGE;

Former::write(
    'https://docs.google.com/forms/d/e/1FAIpQLScYAZE8ywALmMK6-2pEWz_dJk8M_HEBo_ibdNnb0VOz9JOqVQ/formResponse',
    [
        // name
        'entry.1375353538' => $subject,
        // email
        'entry.2106408964' => $email,
        // phone
        'entry.1682555059' => $phone,
        // utm
        'entry.1735720648' => $_SERVER['HTTP_REFERER'],
        'fvv' => 1,
        'draftResponse' => '[null,null,&quot;3921399244542262958&quot;]',
        'pageHistory' => 0,
        'fbzx' => 3921399244542262958
    ]
);

Mailer::mail('sale@tr2b.ru', 'noreply@tr2b.ru', $subject, $message);
