const onUrlChanged = (url) => {
    console.log(url)
    const dataPanel = getOrAppendAdditionalDataPanel();
    const urlGroups = url.match(/https:\/\/www.strava.com\/activities\/([0-9]*)\/analysis\/([0-9]*)\/([0-9]*)/)
    let start = 0
    let end = -1
    if (urlGroups != null) {
        start = urlGroups[2]
        end = urlGroups[3]
    }
    fillWithData(dataPanel, start, end)
}

const getOrAppendAdditionalDataPanel = () => {
    const id = "additional-data-panel"
    let additionalDataPanel = document.querySelector(`#${id}`);

    if (additionalDataPanel == null) {
        const chart = document.querySelector('.chart');

        additionalDataPanel = document.createElement("P");
        additionalDataPanel.id = id;
        const textNode = document.createTextNode("Water");
        additionalDataPanel.appendChild(textNode);

        chart.appendChild(additionalDataPanel);
    }

    return additionalDataPanel;
}

const fillWithData = (dataPanel, start, end) => {
    dataPanel.innerHTML = `NP: [placeholder for NP from ${start} to ${end}]`
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === 'urlChanged') {
            onUrlChanged(request.newUrl)
        }
    });

console.log("Content script loaded")
onUrlChanged(document.URL)
