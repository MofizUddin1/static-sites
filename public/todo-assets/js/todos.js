
// var express 		= require("express"),
//  	app 			= express();
// app.use('/jquery', express.static(__dirname + '.../node_modules/jquery/dist/'));
// import $ from 'jquery';
// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
 
//     var $ = require("jquery")(window);
	
// 	//check off specific todos by clicking
// 	$("ul").on("click", "li", function(){
// 	  $(this).toggleClass("greyOut");
// 	});
// 	//click x to delete
// 	$("ul").on("click",".delete",function(event){
// 	  event.stopPropagation();
// 	  $(this).parent().fadeOut(1000,function(){
// 		$(this).remove();
// 	  });
// 	});
// 	$("input[type='text']").on("keypress",function(event){
// 	  if(event.which === 13){

// 		var newItem = $(this).val();
// 		$("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i> </span>" + newItem + "</li>");
// 		$(this).val("");
// 	  }
// 	});
// 	$(".fa-plus").on("click",function(){
// 	  $("input[type='text']").fadeToggle();
// 	});
// });

function lineOver(evt) {
  var element = document.querySelectorAll("li");

  var evt=window.event || evt; // window.event for IE

  evt.target.classList.toggle("greyOut");
}

var btn = document.getElementsByClassName('delete');
for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
  }, false);
}
var todo = document.getElementById("text");
todo.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
	
	var li = document.createElement("li");
	li.setAttribute("onClick", "lineOver()");
	var span = document.createElement("span");
	span.classList.add("delete");
	span.addEventListener('click', function(e) {
    e.currentTarget.parentNode.remove();
  }, false);
	var i = document.createElement("i");
	i.classList.add('far', 'fa-trash-alt');
	var node = document.createTextNode(todo.value);  
	var element = document.querySelector("ul");  
	
	span.appendChild(i);
	li.appendChild(span);
	li.appendChild(node);
	element.appendChild(li);
	todo.value = ""; 
	 
  }
});

var plus = document.querySelector(".fa-plus");
plus.addEventListener("click", function(e){
	var todo = document.getElementById("text");
	todo.classList.toggle("fade-out");
}, false);