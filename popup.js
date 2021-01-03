let normalizedPowerCheckbox = document.getElementById('normalized_power');

chrome.storage.sync.get('normalizedPower', function (data) {
    normalizedPowerCheckbox.checked = data.normalizedPower;
});

normalizedPowerCheckbox.onclick = function () {
    chrome.storage.sync.set({normalizedPower: normalizedPowerCheckbox.checked}, function () {
        console.log(`Normalized power: ${normalizedPowerCheckbox.checked}`);
    });
};
