			var top1 = $('#section_1').offset().top;
			var top2 = $('#section_3').offset().top;
			var top3 = $('#section_4').offset().top;
			var visited=false;

			$(document).scroll(function() {
			  var scrollPos = $(document).scrollTop();


				if (scrollPos >= top2 && scrollPos < top3) {
				$('.container .swing').css('animation-play-state', 'running');

		  }

			});
