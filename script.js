//your JS code here. If required.
var audio = new Audio();
function playSound(filename) {
	audio.src = 'sounds/' + filename;
    audio.play();
}
function stopSound() {
	audio.pause();
    audio.currentTime = 0;
}