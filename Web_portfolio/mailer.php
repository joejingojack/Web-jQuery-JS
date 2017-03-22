<?PHP

## The lines below need to be edited...

###################### Set up the following variables ######################
#                                                                          #
$to = "rooney_09@abv.bg"; #set address to send form to
$subject = "Results from your Request Info form"; #set the subject line
$headers = "From: Form Mailer"; #set the from address
$forward = 1; # redirect? 1 : yes || 0 : no
$location = "thankyou.htm"; #set page to redirect to, if 1 is above
#                                                                          #
##################### No need to edit below this line ######################

## set up the time ##

$date = date ("l, F jS, Y");
$time = date ("h:i A");

## mail the message ##

$msg = "Below is the result of your feedback form.  It was submitted  on $date at $time.\n\n";
	
foreach ($_POST as $key => $value) {
	$msg .= ucfirst ($key) ." : ". $value . "\n";
}

mail($to, $subject, $msg, $headers);
if ($forward == 1) {
	header ("Location:$location");
}
else {
	echo ("Thank you for submitting our form. We will get back to you as soon as possible.");
}

?>