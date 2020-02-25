$('#todotext').keypress(function(e){
	  if(e.which == 13) {
        var newtodo = $(this).val();
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>" + newtodo+ "</li>");
        $(this).val("");
    }
});


$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
	$(this).parent().remove();
//	e.stopPropagation();
});

$('#toggle-form').click(function(){
	$("input[type='text']").toggle();
});
