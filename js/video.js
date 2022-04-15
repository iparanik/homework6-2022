var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = 100.00 * video.volume + "%";
	console.log("Play Video");
});


document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * (1.00-0.05)
	console.log("New speed is " + video.playbackRate)
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * (1.00+0.05)
	console.log("New speed is " + video.playbackRate)
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime)
	if (video.duration <= video.currentTime + 15.00) {
		video.currentTime = 0.00
		console.log("Going back to the begining of video")
	}
    video.currentTime =  video.currentTime + 15.00
	console.log("Current Location " + video.currentTime)
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});


document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});


var slider = document.querySelector("#slider");


document.querySelector("#slider").addEventListener("click", function() {
	video.volume = slider.value / 100.00;
	document.querySelector("#volume").innerHTML = video.volume * 100.00 + "%";
    console.log("Volume is " + (100.00 * video.volume + "%"));
});
