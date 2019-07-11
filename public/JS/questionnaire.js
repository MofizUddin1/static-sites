var players = ["Gareth Barry", "Ryan Giggs","David James","Gary Speed",
				"Emile Heskey","Rio Ferdinand","Steven Gerrard","Sol Campbell","Paul Scholes",
				"Jermain Defoe","John Terry","Wayne Rooney","Michael Carrick","Peter Crouch",
				"Petr Čech","Alan Shearer","Gareth Southgate","Danny Murphy"];

var Questions = [
	{
		q: "Who is the top Premier League goalscorer of all time?",
		a: "Alan Shearer"
	},
	{
		q: "Which Premier League winner’s father played rugby for Wales?",
		a: "Ryan Giggs"
	},
	{
		q: "Which player holds the record for the most goals in consecutive Premier League games?",
		a: "Jamie Vardy"
	},
	{
		q: "Which goalkeeper has the record of 138 clean sheets for the same Premier League team?",
		a: "Petr Cech"
	},
	{
		q: "Which Swede had a clause in his contract banning him from traveling into space?",
		a: "Stefan Schwarz"
	},
	{
		q: "Who is the only person born before 1960 to score a Premier League hat-trick?",
		a: "Gordon Strachan"
	},
	{
		q: "Name the player that scored the fastest Premier League hat-trick?",
		a: "Sadio Mane"
	},
	{
		q: "Which French player is a record-scoring footballer for Arsenal and went on to become Assistant Manager of Belgium?",
		a: "Thierry Henry"
	},
	{
		q: "Which player went through the Ajax youth system, played for Ajax and became Assistant Manager at the club in 2011?",
		a: "Denis Bergkamp"
	}
];

var question = "";
var answers = [];
$( ".select" ).click(function() {
  
	
	if($(this).text()!== Questions[question].a){
		
		$(this).addClass("incorrect");
		$(this).animate({"opacity": 0});
		$("#message").addClass("incorrect-txt");
		$("#message").text("Try Again!");
	}else{
		$(this).addClass("correct");
		$("#message").removeClass("incorrect-txt");
		$("#message").addClass("correct-txt");
		$("#message").text("Correct!");
		$( ".select" ).each(function() {
			$(this).animate({"opacity": 1});
			$(this).fadeOut(1000);
			$(".next").delay(1600).fadeIn(500);
		});
		
	}
 
});
$(".next").click(function(){
	$("#message").removeClass("correct-txt");
	$( ".select" ).delay(500).each(function() {
			$(this).removeClass("correct");
			$(this).removeClass("incorrect");
		});
			
	start();
	$(".next").fadeOut();
	$( ".select" ).each(function() {
		$(this).fadeIn(1000);
	});
	
});
$(document).ready(function(){
	start();		
});
function start(){
	question = getQuestion();
	answers = getAnswers(question);
	$("#question").text(Questions[question].q);
		var select = document.querySelectorAll(".select");
		for (var i=0;i<answers.length;i++){
			select[i].innerHTML = "<p>" + answers[i] + "</p>";

	}
}

function getQuestion(){
	return Math.floor(Math.random() * Questions.length) + 1;  
}
function getAnswers(question){
	var count = 0;
	var arr = [];
	while(count<4){
		var ans = getWrongAnswer();
		if(ans!==Questions[question].a && ans!==arr[0] && ans!==arr[1] && ans!==arr[2] && ans!==arr[3]){
			arr.push(ans);
			count++;
		}
	}
	arr[Math.floor(Math.random() * 4) + 1] = Questions[question].a;
	return arr;
	
}
function getWrongAnswer(){
	var num = Math.floor(Math.random() * players.length) + 1;  
	return players[num];
}