/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TITLE: navigation.js
AUTHOR: Corbin Combs
CREATE DATE: 10/16/2013
PURPOSE: 
LAST MODIFIED ON: 10/16/2013
LAST MODIFIED BY: Corbin Combs
MODIFICATION HISTORY:
 	10/16/2013 - Create date.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
 $(document).ready(function(){
 $(init);
 $("#button").click(createStory);
 function init(){
		$("#slider").slider();
		$("#datepicker").datepicker();
		$("#button").button();
		$("#spinner").spinner().val(0);
		var candyBars = [
		"Hersheys",
		"Crunch",
		"Snickers",
		"Reeses"];
		$("#autocomplete").autocomplete({source:candyBars});
		
}
function createStory(){
	//validate();
	window.location="story.html";
	var firstName = new String($("#firstName").val());
	var email = new String($("#email").val());
	var password = new String($("#password").val());
	var teleNum = new String($("#teleNum").val());
	var spinnerNum = new String($("#spinner").val());
	var candyBar = new String($("#autocomplete").val());
	var sliderNum = new String($('#slider').slider("option", "value"));
	var meetingDate = new String(formatDate());
	var prefix = new String();
	if($("#chkBx").is(":checked")){
		prefix = "Dr. ";
	}else{
		if($("#rad1").is(":checked")){
			prefix = "Ms. ";
		}else{
			prefix =	"Mr. ";
		}
	}
	
	$("#theStory").html("Dear " + prefix + firstName + ",  <br/>" +"You have won "+ sliderNum +" "+candyBar+  "! To receive them we will meet on " + meetingDate +". I will email you at " + email + 
	" if anything changes. The subject of the email will be the secret word you have indicated: " + password + 
	" and if I do not hear back from you I will call you at: "+teleNum +". It is nice to hear your favorite number is "+ 
	spinnerNum + "<br/> Sincerely Yours, <br/> The Internet");
	
}

function formatDate(){
	var date = $("#datepicker").datepicker("getDate");
    var day  = $("#datepicker").datepicker("getDate").getDate();  
    var month = $("#datepicker").datepicker("getDate").getMonth() + 1;              
    var year =  $("#datepicker").datepicker("getDate").getFullYear();
	return month + "-" + day + "-" + year;
}
/*function validate(){
        // get inputs
        var name = new String($("#firstName").val());
		var email = new String($("#email").val());
		var phone = new String($("#teleNum").val());
		var sliderPos = new Number($("#slider").val());
		var favNum = new Number($("#spinner").val());
		var candyBar = new String($("#autocomplete").val());
		var favNum = new Number($("#spinner").val());
		var date = $(this).datepicker('getDate'),
        day  = $("#datepicker").datepicker("getDate").getDate();  
        month = $("#datepicker").datepicker("getDate").getMonth() + 1;              
        year =  $("#datepicker").datepicker("getDate").getFullYear();
        var formatDate = day + '-' + month + '-' + year;
		
        
        //create an empty error message
        errors = "";
        
        //check name - It simply needs to exist
        if (name == ""){
          errors += "please supply a name \n";
        } // end if
        
        //check email
        emailRE = /^.+@.+\..{2,4}$/;
        if (email.match(emailRE)){
          //console.log("email match");
          //do nothing.
        } else {
          //console.log("email not a match");
          errors += "please check email address \n";
        } // end if
        
        //check phone number
        phoneRE = /^\(\d{3}\) *\d{3}-\d{4}/;
        if (phone.match(phoneRE)){
          //console.log("phone matches");
          //do nothing
        } else {
          //console.log("phone problem");
          errors += "please check phone #\n";        
        } // end phone if
        
        //check for errors
        if (errors == ""){
          alert ("now processing data");
          //process the form
        } else {
          alert(errors);
        } // end if
  
      }*/});
