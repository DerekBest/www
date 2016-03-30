$(function(){
//Folio scrolling effect
	$.easing.elasout = function(x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};
	//stop the click on the links.
	/*$('ul.links').click(function(e){
		e.preventDefault();
		var link = e.target;
		link.blur();
	});*/

	$('div.insideFrame').scrollTo( 0 );
	$.scrollTo( 0 );
	var $viewerTarget = $('#outerFrame');
	function reset_o() {
		$viewerTarget.stop(true).attr({scrollLeft:0, scrollTop:0}).addClass('insideFrameBorder');
	};
	$('#thumbHover-1').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'503px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-1').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-2').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'956px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-2').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-3').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'1409px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-3').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-4').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'1862px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-4').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-5').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'2315px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-5').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-6').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'2768px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-6').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-7').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'3221px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-7').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-8').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'3674px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-8').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-9').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'4127px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-9').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-10').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'4580px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-10').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-11').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'5033px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-11').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-12').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'5486px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-12').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-13').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'5939px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-13').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-14').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'6391px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-14').animate({opacity: 'toggle'}, 200);
	});
	$('#thumbHover-15').hover(function(){
		reset_o(); $viewerTarget.scrollTo( {top:'50px',left:'6844px'}, 2000, { easing:'elasout' } );
		$('#thumbDesc-15').animate({opacity: 'toggle'}, 200);
	});
//thumbnail background slider
	$('ul.links li').css( {backgroundPosition: "0 3px"} )
		.mouseover(function(){
		$(this).stop().animate({backgroundPosition:"(3 0)"}, {duration:100})
		})
		.mouseout(function(){
			$(this).stop().animate({backgroundPosition:"(0 3px)"}, {duration:50, complete:function(){
			$(this).css({backgroundPosition: "0 3px"})
		}});
	});	
});
