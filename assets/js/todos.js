// We are adding a listener on UL instead of LI
// Because we can only add listeners on elements
// that exist when the code is run the first time
$("ul").on("click", "li", function() {
	// Check off specific things by clicking
	$(this).toggleClass("completed");
});

// Click on X to delete
$("ul").on("click", "span", function(event) {
	// We use parent() to remove the entire li within which the span is
	$(this).parent().fadeOut(250, function() {
		$(this).remove();
	});

	// This method stops Event Bubbling
	event.stopPropagation();
});

// Listener for input
$("input[type='text']").on("keypress", function(event) {
	//Chekc if the "Enter" key was pressed
	if (event.which === 13) {
		var inputText = $(this).val();
		$(this).val("");
		// Create a bew li and add it to the ul
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + inputText + "</li>");
	}
});

$(".fa-minus-square-o").click(function() {
	$("input[type='text']").slideToggle();
	$(this).toggleClass("fa-minus-square-o fa-plus-square-o");
});

// $("h1 a").click(function() {
// 	$("input[type='text']").slideToggle();
// 	$(this).find("i").toggleClass("fa-minus-square-o fa-plus-square-o");
// });