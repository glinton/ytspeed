// listen for keyboard initiated command event (content can't 'hear' them)
chrome.commands.onCommand.addListener(runCmd);

function runCmd(command) {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
		chrome.tabs.sendMessage(tabs[0].id, {cmdName: command});
	});
}
