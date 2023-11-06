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
        volumeDisplay.textContent = `${video.volume * 100}%`;
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
			muteBtn.textContent = 'Unmute';
			volumeDisplay.textContent = '0%';

		}else{
			video.volume = video.dataset.prevVolume;
			muteBtn.textContent = 'Mute';
			volumeDisplay.textContent = `${video.volume * 100}%`;
		}
    });
	// Volume Slider
	volumeSlider.addEventListener('input', function() {
		video.volume = this.value / 100;
		volumeDisplay.textContent = `${video.volume * 100 }%`;
	});

	// Utilize the existing 'oldSchool' class on the video element
	document.getElementById('vintage').addEventListener('click', function() {
		const video = document.getElementById('player1');
		video.classList.add('oldSchool');
	});

	// Remove the 'oldSchool' class from the video element
	document.getElementById('orig').addEventListener('click', function() {
		const video = document.getElementById('player1');
		video.classList.remove('oldSchool');
	});

});
