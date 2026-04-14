<?php
$name=$_REQUEST['name'];
 $contact=$_REQUEST['phone'];
 $location=$_REQUEST['location'];
 $fromdate=$_REQUEST['fromdate'];
$mail=$_REQUEST['email'];
$vehicletype=$_REQUEST['vehicletype'];
   $to = "parkmywheels3@gmail.com";
   $subject = "Website Booking Form Enquiry details from ".$name;

   $message = "
  <!doctype html>
<html>
<head>
<meta charset='utf-8'>
<style>
fieldset
{
	border:1px solid #0eaaa6;
}
body
{
	font-family:calibri;
}
a
{
	text-decoration:none;
}
.feed table
{
border-color: #666;
}
.feed tr
	   {
		  background: #eee;
		}
</style>
</head>
<body>
<fieldset><legend>Booking Form Enquiry</legend>
<div class='feed'>
<p style='color:#0eaaa6;'>New Booking Form has been Submitted by <span  style='color:#F88700;'>".$name."</span>,</p>
<table  cellpadding='10'>
<tr><td><strong>Name: </strong></td><td>".$name."</td></tr>
<tr><td><strong>Mobile Number: </strong></td><td>".$contact."</td></tr>
<tr><td><strong>Parking Location: </strong></td><td>".$location."</td></tr>
<tr><td><strong>Parking Required on:</strong></td><td>".$fromdate."</td></tr>
<tr><td><strong>Parking type:</strong></td><td>".$vehicletype."</td></tr>
<tr><td><strong>Contact Email ID:</strong></td><td>".$mail."</td></tr>
</table>
<p style='color:#0eaaa6;'>Best Regards,</p>
<b style='color:#F88700;'>Team parkmywheels</b><br>
<p style='color:#0eaaa6;'>support@parkmywheels.com</p>
</div>
</fieldset>
</body>
</html>";
 
	$headers  = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= "from:<$mail>";
	
    $sentmail = mail($to,$subject,$message,$headers);

   $to1 = $mail;
   $subject1 = "Thank you ".$name." from Team parkmywheels";
   
   $message1 = "
<!doctype html>
<html>
<head>
<meta charset='utf-8'>
<title>Untitled Document</title>
<style>
fieldset
{
	border:1px solid #0eaaa6;
}
body
{
	font-family:calibri;
}
a
{
	text-decoration:none;
}
table
{
//	border:1px solid #0eaaa6;
}
th
{
	background:#0eaaa6;
	padding:5px;
	color:#FFFFFF;
}
td
{
	text-align:center;
	background:#eee;
//	border:1px solid #F88700;
	padding:5px;
	color:#F88700;
}
</style>
</head>

<body>
<fieldset><legend>parkmywheels</legend>
<div class='confirm'>
<p style='color:#0eaaa6;'>Dear ".$name.",</p>
<p style='color:#F88700;'>Greetings from parkmywheels</p>
<p>Thanks for Submitting your Details. We will get back to you Shortly</p>

<p align='justify'>In case you need any assistance, you can reach us at <b style='color:#0eaaa6;'>support@parkmywheels.com</b></p>
<br>
<p style='color:#0eaaa6;'>Best Regards,</p>
<b style='color:#F88700;'>Team parkmywheelsg</b><br>

</div>
</fieldset>
</body>
</html>";

$headers1  = "MIME-Version: 1.0" . "\r\n";
$headers1 .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers1 .= "from:<no-reply@parkmywheels.com>";


       
   $sentmail1 = mail($to1,$subject1,$message1,$headers1);
echo "<script type='text/javascript'>alert('Your Details Has Been Submitted Successfully!.')</script>";
				echo "<script>setTimeout(\"location.href = 'https://parkmywheels.com';\",150);</script>";
?>