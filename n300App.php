
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TITLE: story.html
AUTHOR: Corbin Combs
CREATE DATE: 11/18/2013
PURPOSE: an n300 app
LAST MODIFIED ON: 11/18/2013
LAST MODIFIED BY: Corbin Combs
MODIFICATION HISTORY:
 	10/18/2013 - Create date.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>N300 App</title>
	<link href="css/le-frog/jquery-ui-1.10.3.custom.css" rel="stylesheet">
	<link href="n300App.css" rel="stylesheet">
	<script src="js/jquery-1.9.1.js"></script>
	<script src="js/jquery-ui-1.10.3.custom.js"></script>
	<script type="text/javascript" src = "n300App.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body> 
	<h1>A Mad Lib App</h1>
		<div id="story">
		<h2>The Story!</h2>
			<p id="theStory">
				<?php echo "Hello ", $_POST["prefix"], " ", $_POST["firstName"], "! Your email is ", $_POST["email"], "and your password is ", $_POST["password"], "! Thank you!";?>
			</p>
		</div>
		<footer>
		<div id="backButton">
				<button id="button" onclick="location.href='index.html'">Back</button>
			</div>
		
		</footer>

</body>

</html>
