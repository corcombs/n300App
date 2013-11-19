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
function createStory(){
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
	$("#prefix").html("prefix")
}});
