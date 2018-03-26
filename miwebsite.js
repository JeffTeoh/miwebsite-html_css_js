var vid = document.getElementById(“myVideo”);
function pauseVid() {
	vid.pause();
}

//attach event handler to close button
$(document).ready(function(){
	$(".close").on('click', function(){
		pauseVid();
	});
});

		/*$('.dropdown').hover(function(){
			$('.dropdown-toggle', this).trigger('click');
		});*/
		
		/*var hoverTimeout;
		$('.dropdown').hover(function(){
			clearTimeout(hoverTimeout);
			$('.dropdown-toggle', this).trigger('click');
		}, function(){
			var $self = $(this);
			hoverTimeout = setTimeout(function(){
				$self.removeClass('open');
			}, 150);
		});*/
		
		/*$('.dropdown-menu')
		.mouseover(function(){
			$(this).addClass.('show');
		})
		.mouseout(function(){
			$(this).removeClass('show');
		});*/
		
		/*$('body').on('mouseenter mouseleave','.dropdown',function(e){
			var _d=$(e.target).closest('.dropdown');_d.addClass('show');
			setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
			},300);
		});*/
		
		
		
		/*$(function(){
			$('#modalMiMax2').modal({
				show:false
			}).on('hidden.bs.modal', function () {
				$(this).find('video')[0].pause();
			});
		});*/
		
		/*$(function(){
			$('.launchVideo').on('click', function(e){
				e.preventDefault();
				$( '#' + $(this).data('modal-id') ).modal();
			}); 
			// reload the modal contents when it is closed
			$("#modal-video").on("hidden.bs.modal", function () {
				var url = $('#video-frame').attr('src');
				$('#video-frame').attr('src', '');
				$('#video-frame').attr('src', url);
			});
		});*/

