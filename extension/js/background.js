// listen for keyboard initiated command event (content can't 'hear' them)
chrome.commands.onCommand.addListener(function(command) {
	// log all the things
	console.log('Command:', command);

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	    chrome.tabs.sendMessage(tabs[0].id, {cmdName: command}, function(response) {
			if ( typeof response !== 'undefined' && response ) {
				console.log("success");
				console.log(response.done);
			} else {
				console.log("error");
				console.log(chrome.runtime.lastError);
			}
		});
	});
});
