// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains 'youtube.com/watch' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube.com/watch' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

// listen for keyboard initiated command event (content can't 'hear' them)
chrome.commands.onCommand.addListener(function(command) {
	// log all the things
	console.log('Command:', command);

	// background can't talk to content directly so send to it's tab
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
