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



