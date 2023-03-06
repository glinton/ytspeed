// set speed each refresh/content
var speed = 1

console.log("Initialized speed: " + speed);

// listen for messages from background
chrome.runtime.onMessage.addListener(runtimeCmd);

function runtimeCmd(msg) {
	// adjust speed based on command
	switch(msg.cmdName) {
		case "normal":
			speed = 1;
			break;
		case "slower":
			speed -= .25;
			break;
		case "faster":
			speed += .25;
			break;
	}

	console.log("Setting play speed: " + speed);

	var vids = document.getElementsByTagName("video")
	for (var i = 0; i < vids.length; i++) {
		vids[i].playbackRate = speed;
	}
}
