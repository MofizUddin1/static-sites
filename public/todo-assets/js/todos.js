//javaScript DOM solution
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