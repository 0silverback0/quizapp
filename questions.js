function submitAnswers(){
	var total = 7;
	var score = 0;

	//get user input

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	// validation
	

	for(i=1; i<= total; i++){
			if(eval('q'+ i) == null||eval('q'+ i)== ''){
		alert('you missed question ' + i)
		return false;
	}
	}
		// set correct answers
		var answers = ["c","a","c","d","e","d","c"];

		//check answers
		for(i=1;i<= total; i++){
			if(eval('q'+ i)== answers[i - 1]){
			score++;
		}

	}
			// display results
			var results	= document.getElementById("results").innerHTML= "<h3> You scored <span>" +score+ "</span> out of<span> "+total+'</span></h3>';
		
		alert("you scored " +score+ " out of " + total);

		return	false;
}





