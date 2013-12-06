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
		$("#button").button();
		
}
function processResult(data, textStatus){
	$("#story").html(data)
}
function createStory(){
	var prefix = new String();
	/*if($("#chkBx").is(":checked")){
		prefix = "Dr. ";
	}else{
		if($("#rad1").is(":checked")){
			prefix = "Ms. ";
		}else{
			prefix =	"Mr. ";
		}
	}*/
	var name = $("#firstName").val();
	var email = $("#email").val();
	var password =$("#password").val();
	$("#story").html("Hello "+name+"! Your email is "+email+" and your passowrd is "+password+"!")

}});
