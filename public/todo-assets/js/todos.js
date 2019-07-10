import $ from 'jquery';
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
	//check off specific todos by clicking
	$("ul").on("click", "li", function(){
	  $(this).toggleClass("greyOut");
	});
	//click x to delete
	$("ul").on("click",".delete",function(event){
	  event.stopPropagation();
	  $(this).parent().fadeOut(1000,function(){
		$(this).remove();
	  });
	});
	$("input[type='text']").on("keypress",function(event){
	  if(event.which === 13){

		var newItem = $(this).val();
		$("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i> </span>" + newItem + "</li>");
		$(this).val("");
	  }
	});
	$(".fa-plus").on("click",function(){
	  $("input[type='text']").fadeToggle();
	});
});

