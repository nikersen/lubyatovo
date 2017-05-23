$(document).ready(function(){

	$('#slider-videos').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		responsive: [{
			breakpoint: 767,
			settings: 'unslick'
		}]
	});

	$('.js-tile-popup-1').click(function(){
		$('.promo-popup').hide();
		$('#overlay, .js-popup-1').show();
		$('body').css({'overflow' : 'hidden'});
	});
	$('.js-tile-popup-2').click(function(){
		$('.promo-popup').hide();
		$('#overlay, .js-popup-2').show();
		$('body').css({'overflow' : 'hidden'});
	});
	$('.js-tile-popup-3').click(function(){
		$('.promo-popup').hide();
		$('#overlay, .js-popup-3').show();
		$('body').css({'overflow' : 'hidden'});
	});
	$('.js-tile-popup-4').click(function(){
		$('.promo-popup').hide();
		$('#overlay, .js-popup-4').show();
		$('body').css({'overflow' : 'hidden'});
	});

	$('.promo-popup__close').click(function(){
		$('#overlay').hide();
		$('body').css({'overflow' : 'visible'});
	});

	$('#overlay').click(function(e){
        var div = $(".promo-popup");  
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
			$('#overlay').hide();
			$('body').css({'overflow' : 'visible'});
        }
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdCQoJyNzbGlkZXItdmlkZW9zJykuc2xpY2soe1xyXG5cdFx0YXV0b3BsYXk6IHRydWUsXHJcblx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdHJlc3BvbnNpdmU6IFt7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDc2NyxcclxuXHRcdFx0c2V0dGluZ3M6ICd1bnNsaWNrJ1xyXG5cdFx0fV1cclxuXHR9KTtcclxuXHJcblx0JCgnLmpzLXRpbGUtcG9wdXAtMScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcucHJvbW8tcG9wdXAnKS5oaWRlKCk7XHJcblx0XHQkKCcjb3ZlcmxheSwgLmpzLXBvcHVwLTEnKS5zaG93KCk7XHJcblx0XHQkKCdib2R5JykuY3NzKHsnb3ZlcmZsb3cnIDogJ2hpZGRlbid9KTtcclxuXHR9KTtcclxuXHQkKCcuanMtdGlsZS1wb3B1cC0yJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5wcm9tby1wb3B1cCcpLmhpZGUoKTtcclxuXHRcdCQoJyNvdmVybGF5LCAuanMtcG9wdXAtMicpLnNob3coKTtcclxuXHRcdCQoJ2JvZHknKS5jc3MoeydvdmVyZmxvdycgOiAnaGlkZGVuJ30pO1xyXG5cdH0pO1xyXG5cdCQoJy5qcy10aWxlLXBvcHVwLTMnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnByb21vLXBvcHVwJykuaGlkZSgpO1xyXG5cdFx0JCgnI292ZXJsYXksIC5qcy1wb3B1cC0zJykuc2hvdygpO1xyXG5cdFx0JCgnYm9keScpLmNzcyh7J292ZXJmbG93JyA6ICdoaWRkZW4nfSk7XHJcblx0fSk7XHJcblx0JCgnLmpzLXRpbGUtcG9wdXAtNCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcucHJvbW8tcG9wdXAnKS5oaWRlKCk7XHJcblx0XHQkKCcjb3ZlcmxheSwgLmpzLXBvcHVwLTQnKS5zaG93KCk7XHJcblx0XHQkKCdib2R5JykuY3NzKHsnb3ZlcmZsb3cnIDogJ2hpZGRlbid9KTtcclxuXHR9KTtcclxuXHJcblx0JCgnLnByb21vLXBvcHVwX19jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcjb3ZlcmxheScpLmhpZGUoKTtcclxuXHRcdCQoJ2JvZHknKS5jc3MoeydvdmVyZmxvdycgOiAndmlzaWJsZSd9KTtcclxuXHR9KTtcclxuXHJcblx0JCgnI292ZXJsYXknKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgZGl2ID0gJChcIi5wcm9tby1wb3B1cFwiKTsgIFxyXG4gICAgICAgIGlmICghZGl2LmlzKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0JCgnI292ZXJsYXknKS5oaWRlKCk7XHJcblx0XHRcdCQoJ2JvZHknKS5jc3MoeydvdmVyZmxvdycgOiAndmlzaWJsZSd9KTtcclxuICAgICAgICB9XHJcblx0fSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
