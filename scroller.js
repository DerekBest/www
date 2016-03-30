$(document).ready(function(e) {
	var main = main = $('nav ul');
	$('.scroller').click(function(event) {
        event.preventDefault();
		var full_url = this.href,
        	parts = full_url.split('#'),
        	trgt = parts[1],
        	target_offset = $('#'+trgt).offset(),
        	target_top = target_offset.top;
    	$('html, body').animate({
			scrollTop:target_top
			}, 300);
		main.children().removeClass();      
		$(this).parent().addClass('active');
	});
});
