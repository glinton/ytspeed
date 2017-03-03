// set speed each refresh/content
var speed = 1

console.log("Initialized speed: " + speed);

// Listen for messages from background
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	// Adjust speed based on command
	switch(msg.cmdName) {
		case "normal":
			speed = 1;
			break;
		case "slower":
			speed -= .5;
			break;
		case "faster":
			speed += .5;
			break;
	}

	console.log("Setting play speed: " + speed);
	document.getElementsByTagName("video")[0].playbackRate = speed;
	sendResponse({done: "done"});
});
