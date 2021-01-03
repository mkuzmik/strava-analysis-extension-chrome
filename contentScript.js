console.log("Content script loaded")

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === 'urlChanged') {
            console.log(request.newUrl)
        }
    });

