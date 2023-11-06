var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('player1');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const slowerBtn = document.getElementById('slower');
    const fasterBtn = document.getElementById('faster');
    const skipBtn = document.getElementById('skip');
	const muteBtn = document.getElementById('mute');
	const volumeDisplay = document.getElementById('volume');
    const volumeSlider = document.getElementById('slider');
    // Initialize video settings
    video.autoplay = false;
    video.loop = false;

    // Play Button
    playBtn.addEventListener('click', function() {
        video.play();
        volumeDisplay.textContent = `Volume is: ${video.volume * 100}%`;
    });

    // Pause Button
    pauseBtn.addEventListener('click', function() {
        video.pause();
    });

    // Slow Down Button
    slowerBtn.addEventListener('click', function() {
        video.playbackRate -= 0.1;
        console.log('New speed: ' + video.playbackRate);
    });

    // Speed Up Button
    fasterBtn.addEventListener('click', function() {
        video.playbackRate += (video.playbackRate < 1) ? 0.1 : (video.playbackRate * 0.1);
        console.log('New speed: ' + video.playbackRate);
    });

    // Skip Ahead Button
    skipBtn.addEventListener('click', function() {
        if ((video.currentTime + 10) < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log('Current video location: ' + video.currentTime);
    });
	// Mute Button 
	muteBtn.addEventListener('click', function() {
		if (video.volume > 0){
			video.dataset.prevVolume = video.volume;
			video.volume = 0;
			volumeDisplay.textContent = 'Muted';
		}else{
			video.volume = video.dataset.prevVolume;
			volumeDisplay.textContent = `${video.volume * 100}%`;
		}
    });
	// Volume Slider
	volumeSlider.addEventListener('input', function() {
		video.volume = this.value / 100;
		volumeDisplay.textContent = `Volume is: ${video.volume * 100}%`;
	});

	// Old School Button (Add the 'old-school' class to the video)
	document.getElementById('vintage').addEventListener('click', function() {
		video.classList.add('old-school');
	});

	// Original Button (Remove the 'old-school' class from the video)
	document.getElementById('orig').addEventListener('click', function() {
		video.classList.remove('old-school');
	});
	

});

