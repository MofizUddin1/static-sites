var players = ["Gareth Barry", "Ryan Giggs","David James","Gary Speed",
				"Emile Heskey","Rio Ferdinand","Steven Gerrard","Sol Campbell","Paul Scholes",
				"Jermain Defoe","John Terry","Wayne Rooney","Michael Carrick","Peter Crouch",
				"Petr Čech","Alan Shearer","Gareth Southgate","Danny Murphy",
			  	"Tony Adams","Mehdi Abeid","Rolando Aarons","Russell Anderson",
			   	"Samassi Abou","Martin Albrechtsen","Hope Akpan","Alisson",
			   	"Ben Alnwick","Shola Ameobi","Ricky Álvarez","Markus Babbel",
			   	"Leighton Baines","Ibrahima Bakayoko","Tiémoué Bakayoko","Slaven Bilić",
			   	"Kingsley Black","Wilfried Bony","Santi Cazorla","Djibril Cissé",
			   	"Stan Collymore","Aaron Cresswell","Jermain Defoe","Didier Deschamps",
			   	"Virgil van Dijk","Lee Dixon","Danny Drinkwater","Didier Drogba",
			   	"Cesc Fàbregas","Edu Gaspar","Emmanuel Eboué","Gilberto Silva"
			  ];

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
	},
	{
		q:"Who won the PFA player of the year award for the 18/19 season?",
		a:"Virgil Van Dijk"
	},
	{
		q:"Who was the first ever winner of the Premier League’s Golden Boot?",
		a:"Teddy Sheringham"
	},
	{
		q:"Who scored the first Premier League hat-trick?",
		a:"Eric Cantona"
	},
	{
		q:"Who scored the goal that enabled the Republic of Ireland to beat Italy at the 1994 World Cup finals?",
		a:"Ray Houghton"
	},
	{
		q:"Name the player that, aged forty, was the oldest World Cup winning captain?",
		a:"Dino Zoff"
	},
	{
		q:"Who is the highest scorer in World Cup finals for the Netherlands, with seven goals?",
		a:"Johnny Rep"
	},
	{
		q:"Which player won the World Cup Young Player award in 2018?",
		a:"Kylian Mbappe"
	},
	{
		q:"Name the Dutch footballer who was voted “European Player of the Century” in 1999.",
		a:"Johan Cruyff"
	},
	{
		q:"Who was Jose Mourinho’s first signing at Chelsea?",
		a:"Paulo Ferreira"
	},
	{
		q:"In 2005, Newcastle’s Lee Bowyer had an on-pitch scrap with which team-mate?",
		a:"Kieron Dyer"
	},
	{
		q:"Which player holds the record for scoring the most goals in his debut Premier League season?",
		a:"Kevin Phillips"
	}
];

var question = "";
var answers = [];
var score = 0;
var round = 1;
var points = 4;
$( ".select" ).click(function() {
	
  if($(this).text()!== Questions[question].a){
	  	points--;
		$(this).addClass("incorrect");
		$(this).animate({"opacity": 0});
		$("#message").addClass("incorrect-txt");
		$("#message").text("Try Again!");
	  	
	}else{
		score += points;
		$("#score").text(score);
		$(this).addClass("correct");
		$("#message").removeClass("incorrect-txt");
		$("#message").addClass("correct-txt");
		$("#message").text("Correct!");
		$( ".select" ).each(function() {
			$(this).animate({"opacity": 1});
			$(this).fadeOut(1500);
		});
		$(".next").delay(2000).fadeIn();
		$( ".score" ).each(function() {
		$(this).delay(2000).fadeIn();
		});
		}
});
$(".next").click(function(){
	if(round>=10){
		$(".next").hide();
		$("#qnum").animate({"opacity": 0});
		$("#question").animate({"opacity": 0});
		$("#message").removeClass("incorrect-txt");
		$("#message").removeClass("correct-txt");
		$("#message").addClass("end-txt");
		$("#message").text("QUESTIONNAIRE OVER!");
		$( ".score" ).each(function() {
		$(this).delay(2000).fadeIn();
		});
		$(".start").delay(2000).fadeIn();
	}else{
		round++;
		$("#num").text(round);
		$(".next").hide();
		$( ".score" ).each(function() {
			$(this).hide();
		});
		$("#message").removeClass("correct-txt");
		$( ".select" ).each(function() {
				$(this).removeClass("correct");
				$(this).removeClass("incorrect");
			});

		start();

		$( ".select" ).each(function() {
			$(this).fadeIn(1000);
		});
	}
	
	
});
$(".begin").click(function(){
	$(".rules").slideUp(2000);
	$(".qanda").delay(2000).fadeIn(3000);
	$(".header").delay(2000).fadeIn(3000);
});
$(document).ready(function(){
	$(".rules").slideDown(2000);
	
	start();		
});
function start(){
	points=4;
	question = getQuestion();
	answers = getAnswers(question);
	$( ".score" ).each(function() {
			$(this).hide();
		});
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
	arr[Math.floor(Math.random() * 3) + 1] = Questions[question].a;
	return arr;
	
}
function getWrongAnswer(){
	var num = Math.floor(Math.random() * players.length) + 1;  
	return players[num];
}