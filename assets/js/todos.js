// Chaeck specific ToDo by click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Input listener
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});


$(".fa-plus").on("click", function(event) {
	$("#input-todo").slideToggle("slow");
	event.stopPropagation();
});