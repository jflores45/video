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
    const volumeDisplay = document.getElementById('volume');
    
    // Turn off autoplay and looping
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
});
