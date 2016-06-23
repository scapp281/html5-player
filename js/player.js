window.addEventListener('load', function() {

	video = document.getElementById('video');

	playButton = document.getElementById('play-button');
    
    pbar = document.getElementById('pbar');

	video.load();
	video.addEventListener('canplay', function() {

		playButton.addEventListener('click', playOrPause, false);

	}, false);

}, false);

function playOrPause() {
	if (video.paused) {
		video.play();
        update = setInterval(updatePlayer,30);
		playButton.src = 'images/pause.png';
	} else {
		video.pause();
        window.clearInterval(update);
		playButton.src = 'images/play.png';
        
	}
}

function updatePlayer(){
    var percentage = (video.currentTime/video.duration)*100;
    pbar.style.width = percentage + '%';
    if(video.ended){
        window.clearInterval(update);
        playButton.src = 'images/replay.png'
    }
}